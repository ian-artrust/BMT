Ext.define('BMT.module.Simpanan.SimpananQurban.controller.SimpananQurban',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananQurban.store.SimpananQurban');
        me.getStore('BMT.module.Simpanan.SimpananQurban.store.TrsQurban');
		me.control({
			"gridsimpananqurban" 							  : {
				itemclick: me.viewTrsQurban
			},
			"gridsimpananqurban  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananqurban  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananqurban  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananqurbanorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananqurban textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananqurban button[action=print]"        : {
               click: me.print
            },
            "formsimpananqurban button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananQurban.store.SimpananQurban').reload();
	},

	viewTrsQurban: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formsimpananqurban');
        var grid = Ext.getCmp('gridtrsqurban');
        form.getForm().setValues(record.data);

     	var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'simpananqurban/c_simpananqurban/getTrsQurban',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data        = Ext.decode(response.responseText);
                var storeTrsQurban = Ext.getStore('BMT.module.Simpanan.SimpananQurban.store.TrsQurban');
                storeTrsQurban.loadData([],false);
                storeTrsQurban.add(data.data);
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
            url     : BASE_URL + 'simpananqurban/c_simpananqurban/saveTrsQurban',
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
                    var form        = Ext.getCmp('formsimpananqurban');
                    var grid        = Ext.getCmp('gridsimpananqurban');
                    var gridtrsqurban  = Ext.getCmp('gridtrsqurban');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Simpanan.SimpananQurban.store.SimpananQurban').reload();
                    me.getStore('BMT.module.Simpanan.SimpananQurban.store.TrsQurban').reload();
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
        var form        = Ext.getCmp('formsimpananqurban');
        var grid        = Ext.getCmp('gridsimpananqurban');
        var gridtrsqurban  = Ext.getCmp('gridtrsqurban');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Simpanan.SimpananQurban.store.SimpananQurban').reload();
        me.getStore('BMT.module.Simpanan.SimpananQurban.store.TrsQurban').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {simpananqurbanname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Simpanan.SimpananQurban.store.SimpananQurban');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananqurban/c_simpananqurban/printAnggota/';
    },
});