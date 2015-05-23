Ext.define('BMT.module.Simpanan.SimpananUkhuwah.controller.SimpananUkhuwah',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananUkhuwah.store.SimpananUkhuwah');
        me.getStore('BMT.module.Simpanan.SimpananUkhuwah.store.TrsUkhuwah');
		me.control({
			"gridsimpananukhuwah" 							  : {
				itemclick: me.viewTrsUkhuwah
			},
			"gridsimpananukhuwah  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananukhuwah  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananukhuwah  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananukhuwahorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananukhuwah textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananukhuwah button[action=print]"        : {
               click: me.print
            },
            "formsimpananukhuwah button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananUkhuwah.store.SimpananUkhuwah').reload();
	},

	viewTrsUkhuwah: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formsimpananukhuwah');
        var grid = Ext.getCmp('gridtrsukhuwah');
        form.getForm().setValues(record.data);

     	var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'simpananukhuwah/c_simpananukhuwah/getTrsUkhuwah',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data        = Ext.decode(response.responseText);
                var storeTrsUkhuwah = Ext.getStore('BMT.module.Simpanan.SimpananUkhuwah.store.TrsUkhuwah');
                storeTrsUkhuwah.loadData([],false);
                storeTrsUkhuwah.add(data.data);
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
            url     : BASE_URL + 'simpananukhuwah/c_simpananukhuwah/saveTrsUkhuwah',
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
                    var form        = Ext.getCmp('formsimpananukhuwah');
                    var grid        = Ext.getCmp('gridsimpananukhuwah');
                    var gridtrsukhuwah  = Ext.getCmp('gridtrsukhuwah');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Simpanan.SimpananUkhuwah.store.SimpananUkhuwah').reload();
                    me.getStore('BMT.module.Simpanan.SimpananUkhuwah.store.TrsUkhuwah').reload();
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
        var form        = Ext.getCmp('formsimpananukhuwah');
        var grid        = Ext.getCmp('gridsimpananukhuwah');
        var gridtrsukhuwah  = Ext.getCmp('gridtrsukhuwah');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Simpanan.SimpananUkhuwah.store.SimpananUkhuwah').reload();
        me.getStore('BMT.module.Simpanan.SimpananUkhuwah.store.TrsUkhuwah').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {simpananukhuwahname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Simpanan.SimpananUkhuwah.store.SimpananUkhuwah');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananukhuwah/c_simpananukhuwah/printAnggota/';
    },
});