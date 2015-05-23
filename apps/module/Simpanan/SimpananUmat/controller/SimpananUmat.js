Ext.define('BMT.module.Simpanan.SimpananUmat.controller.SimpananUmat',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananUmat.store.SimpananUmat');
        me.getStore('BMT.module.Simpanan.SimpananUmat.store.TrsUmat');
		me.control({
			"gridsimpananumat" 							  : {
				itemclick: me.viewTrsUmat
			},
			"gridsimpananumat  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananumat  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananumat  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananumatorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananumat textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananumat button[action=print]"        : {
               click: me.print
            },
            "formsimpananumat button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananUmat.store.SimpananUmat').reload();
	},

	viewTrsUmat: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formsimpananumat');
        var grid = Ext.getCmp('gridtrsumat');
        form.getForm().setValues(record.data);

     	var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'simpananumat/c_simpananumat/getTrsUmat',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data         = Ext.decode(response.responseText);
                var storeTrsUmat = Ext.getStore('BMT.module.Simpanan.SimpananUmat.store.TrsUmat');
                storeTrsUmat.loadData([],false);
                storeTrsUmat.add(data.data);
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
            url     : BASE_URL + 'simpananumat/c_simpananumat/saveTrsUmat',
            method  : 'POST',
            params  : { 
                jumlah : jumlah, 
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
                    var form        = Ext.getCmp('formsimpananumat');
                    var grid        = Ext.getCmp('gridsimpananumat');
                    var gridtrsumat  = Ext.getCmp('gridtrsumat');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Simpanan.SimpananUmat.store.SimpananUmat').reload();
                    me.getStore('BMT.module.Simpanan.SimpananUmat.store.TrsUmat').reload();
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
        var form        = Ext.getCmp('formsimpananumat');
        var grid        = Ext.getCmp('gridsimpananumat');
        var gridtrsumat  = Ext.getCmp('gridtrsumat');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Simpanan.SimpananUmat.store.SimpananUmat').reload();
        me.getStore('BMT.module.Simpanan.SimpananUmat.store.TrsUmat').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {simpananumatname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Simpanan.SimpananUmat.store.SimpananUmat');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananumat/c_simpananumat/printAnggota/';
    },
});