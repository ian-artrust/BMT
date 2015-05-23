Ext.define('BMT.module.Simpanan.SimpananWalimah.controller.SimpananWalimah',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananWalimah.store.SimpananWalimah');
        me.getStore('BMT.module.Simpanan.SimpananWalimah.store.TrsWalimah');
		me.control({
			"gridsimpananwalimah" 							  : {
				itemclick: me.viewTrsWalimah
			},
			"gridsimpananwalimah  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananwalimah  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananwalimah  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananwalimahorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananwalimah textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananwalimah button[action=print]"        : {
               click: me.print
            },
            "formsimpananwalimah button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananWalimah.store.SimpananWalimah').reload();
	},

	viewTrsWalimah: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formsimpananwalimah');
        var grid = Ext.getCmp('gridtrswalimah');
        form.getForm().setValues(record.data);

     	var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'simpananwalimah/c_simpananwalimah/getTrsWalimah',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data        = Ext.decode(response.responseText);
                var storeTrsWalimah = Ext.getStore('BMT.module.Simpanan.SimpananWalimah.store.TrsWalimah');
                storeTrsWalimah.loadData([],false);
                storeTrsWalimah.add(data.data);
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
            url     : BASE_URL + 'simpananwalimah/c_simpananwalimah/saveTrsWalimah',
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
                    var form        = Ext.getCmp('formsimpananwalimah');
                    var grid        = Ext.getCmp('gridsimpananwalimah');
                    var gridtrswalimah  = Ext.getCmp('gridtrswalimah');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Simpanan.SimpananWalimah.store.SimpananWalimah').reload();
                    me.getStore('BMT.module.Simpanan.SimpananWalimah.store.TrsWalimah').reload();
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
        var form        = Ext.getCmp('formsimpananwalimah');
        var grid        = Ext.getCmp('gridsimpananwalimah');
        var gridtrswalimah  = Ext.getCmp('gridtrswalimah');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Simpanan.SimpananWalimah.store.SimpananWalimah').reload();
        me.getStore('BMT.module.Simpanan.SimpananWalimah.store.TrsWalimah').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {simpananwalimahname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Simpanan.SimpananWalimah.store.SimpananWalimah');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananwalimah/c_simpananwalimah/printAnggota/';
    },
});