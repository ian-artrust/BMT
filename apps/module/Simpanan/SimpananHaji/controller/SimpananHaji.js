Ext.define('BMT.module.Simpanan.SimpananHaji.controller.SimpananHaji',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananHaji.store.SimpananHaji');
        me.getStore('BMT.module.Simpanan.SimpananHaji.store.TrsHaji');
		me.control({
			"gridsimpananhaji" 							  : {
				itemclick: me.viewTrsHaji
			},
			"gridsimpananhaji  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananhaji  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananhaji  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananhajiorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananhaji textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananhaji button[action=print]"        : {
               click: me.print
            },
            "formsimpananhaji button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananHaji.store.SimpananHaji').reload();
	},

	viewTrsHaji: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formsimpananhaji');
        var grid = Ext.getCmp('gridtrshaji');
        form.getForm().setValues(record.data);

     	var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'simpananhaji/c_simpananhaji/getTrsHaji',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data        = Ext.decode(response.responseText);
                var storeTrsHaji = Ext.getStore('BMT.module.Simpanan.SimpananHaji.store.TrsHaji');
                storeTrsHaji.loadData([],false);
                storeTrsHaji.add(data.data);
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
            url     : BASE_URL + 'simpananhaji/c_simpananhaji/saveTrsHaji',
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
                    var form        = Ext.getCmp('formsimpananhaji');
                    var grid        = Ext.getCmp('gridsimpananhaji');
                    var gridtrshaji  = Ext.getCmp('gridtrshaji');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Simpanan.SimpananHaji.store.SimpananHaji').reload();
                    me.getStore('BMT.module.Simpanan.SimpananHaji.store.TrsHaji').reload();
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
        var form        = Ext.getCmp('formsimpananhaji');
        var grid        = Ext.getCmp('gridsimpananhaji');
        var gridtrshaji  = Ext.getCmp('gridtrshaji');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Simpanan.SimpananHaji.store.SimpananHaji').reload();
        me.getStore('BMT.module.Simpanan.SimpananHaji.store.TrsHaji').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {simpananhajiname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Simpanan.SimpananHaji.store.SimpananHaji');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananhaji/c_simpananhaji/printAnggota/';
    },
});