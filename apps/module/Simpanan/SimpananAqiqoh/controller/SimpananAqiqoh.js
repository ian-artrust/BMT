Ext.define('BMT.module.Simpanan.SimpananAqiqoh.controller.SimpananAqiqoh',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananAqiqoh.store.SimpananAqiqoh');
        me.getStore('BMT.module.Simpanan.SimpananAqiqoh.store.TrsAqiqoh');
		me.control({
			"gridsimpananaqiqoh" 							  : {
				itemclick: me.viewTrsAqiqoh
			},
			"gridsimpananaqiqoh  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananaqiqoh  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananaqiqoh  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananaqiqohorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananaqiqoh textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananaqiqoh button[action=print]"        : {
               click: me.print
            },
            "formsimpananaqiqoh button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananAqiqoh.store.SimpananAqiqoh').reload();
	},

	viewTrsAqiqoh: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formsimpananaqiqoh');
        var grid = Ext.getCmp('gridtrsaqiqoh');
        form.getForm().setValues(record.data);

     	var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'simpananaqiqoh/c_simpananaqiqoh/getTrsAqiqoh',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data        = Ext.decode(response.responseText);
                var storeTrsAqiqoh = Ext.getStore('BMT.module.Simpanan.SimpananAqiqoh.store.TrsAqiqoh');
                storeTrsAqiqoh.loadData([],false);
                storeTrsAqiqoh.add(data.data);
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
            url     : BASE_URL + 'simpananaqiqoh/c_simpananaqiqoh/saveTrsAqiqoh',
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
                    var form        = Ext.getCmp('formsimpananaqiqoh');
                    var grid        = Ext.getCmp('gridsimpananaqiqoh');
                    var gridtrsaqiqoh  = Ext.getCmp('gridtrsaqiqoh');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Simpanan.SimpananAqiqoh.store.SimpananAqiqoh').reload();
                    me.getStore('BMT.module.Simpanan.SimpananAqiqoh.store.TrsAqiqoh').reload();
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
        var form        = Ext.getCmp('formsimpananaqiqoh');
        var grid        = Ext.getCmp('gridsimpananaqiqoh');
        var gridtrsaqiqoh  = Ext.getCmp('gridtrsaqiqoh');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Simpanan.SimpananAqiqoh.store.SimpananAqiqoh').reload();
        me.getStore('BMT.module.Simpanan.SimpananAqiqoh.store.TrsAqiqoh').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {simpananaqiqohname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Simpanan.SimpananAqiqoh.store.SimpananAqiqoh');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananaqiqoh/c_simpananaqiqoh/printAnggota/';
    },
});