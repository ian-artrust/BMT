Ext.define('BMT.module.Marketing.NasabahHandle.controller.NasabahHandle',{
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function(){
        var me = this;
        me.getStore('BMT.module.Marketing.NasabahHandle.store.NasabahHandle');
        me.getStore('BMT.module.Marketing.NasabahHandle.store.TrsNasabahHandle');
        me.control({
            "gridnasabahhandle"                              : {
                itemclick: me.viewTrsNasabahHandle
            },
            "gridnasabahhandle  button[action=delete]"      : {
                click: me.del
            },
            "gridnasabahhandleorg"                          : {
               itemdblclick: me.addorg
            },
            "gridnasabahhandle textfield[action=search]"    : {
               keypress: me.search
            },
            "gridnasabahhandle button[action=print]"        : {
               click: me.print
            }
        });
    },

    reloadStore : function(){
        var me = this;
        me.getStore('BMT.module.Marketing.NasabahHandle.store.NasabahHandle').reload();
    },

    viewTrsNasabahHandle: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formnasabahhandle');
        var grid = Ext.getCmp('gridtrsnasabahhandle');
        form.getForm().setValues(record.data);

        var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'nasabahhandle/c_nasabahhandle/getTrsNasabahHandle',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data        = Ext.decode(response.responseText);
                var storeTrsNasabahHandle = Ext.getStore('BMT.module.Marketing.NasabahHandle.store.TrsNasabahHandle');
                storeTrsNasabahHandle.loadData([],false);
                storeTrsNasabahHandle.add(data.data);
                // console.log(data); 
            }
        });
    },

    save: function(btn, evt, opts){
        var me              = this;
        var form            = btn.up('form').getForm();
        var jumlah          = form.findField('jumlah').getValue();
        var tgl_bayar       = form.findField('tgl_bayar').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'nasabahhandle/c_nasabahhandle/saveTrsNasabahHandle',
            method  : 'POST',
            params  : { 
                jumlah    : jumlah, 
                tgl_bayar : tgl_bayar 
            },
            success : function(response){
                var data    = Ext.JSON.decode(response.responseText);
                if(data.total === 1){
                    Ext.MessageBox.show({
                        title           : 'Informasi',
                        msg             : 'Data Telah Tersimpan',
                        icon            : Ext.MessageBox.INFO,
                        buttons         : Ext.MessageBox.OK
                    });
                    var form        = Ext.getCmp('formnasabahhandle');
                    var grid        = Ext.getCmp('gridnasabahhandle');
                    var gridtrsnasabahhandle  = Ext.getCmp('gridtrsnasabahhandle');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Marketing.NasabahHandle.store.NasabahHandle').reload();
                    me.getStore('BMT.module.Marketing.NasabahHandle.store.TrsNasabahHandle').reload();
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Pilih Dahulu Anggotanya',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    });
                } else {
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Pengisian Data Salah',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    });                   
                }
            }
        });   
    },


    reset: function(btn) {//Reset Form
        var me = this;
        var form        = Ext.getCmp('formnasabahhandle');
        var grid        = Ext.getCmp('gridnasabahhandle');
        var gridtrsnasabahhandle  = Ext.getCmp('gridtrsnasabahhandle');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Marketing.NasabahHandle.store.NasabahHandle').reload();
        me.getStore('BMT.module.Marketing.NasabahHandle.store.TrsNasabahHandle').reload();
    },  

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {nasabahhandlename : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Marketing.NasabahHandle.store.NasabahHandle');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'nasabahhandle/c_nasabahhandle/printAnggota/';
    },
});