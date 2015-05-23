Ext.define('BMT.module.Simpanan.SimpananIdulFitri.controller.SimpananIdulFitri',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananIdulFitri.store.SimpananIdulFitri');
        me.getStore('BMT.module.Simpanan.SimpananIdulFitri.store.TrsIdulFitri');
		me.control({
			"gridsimpananidulfitri" 							  : {
				itemclick: me.viewTrsIdulFitri
			},
			"gridsimpananidulfitri  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananidulfitri  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananidulfitri  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananidulfitriorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananidulfitri textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananidulfitri button[action=print]"        : {
               click: me.print
            },
            "formsimpananidulfitri button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananIdulFitri.store.SimpananIdulFitri').reload();
	},

	viewTrsIdulFitri: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formsimpananidulfitri');
        var grid = Ext.getCmp('gridtrsidulfitri');
        form.getForm().setValues(record.data);

     	var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'simpananidulfitri/c_simpananidulfitri/getTrsIdulFitri',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data        = Ext.decode(response.responseText);
                var storeTrsIdulFitri = Ext.getStore('BMT.module.Simpanan.SimpananIdulFitri.store.TrsIdulFitri');
                storeTrsIdulFitri.loadData([],false);
                storeTrsIdulFitri.add(data.data);
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
            url     : BASE_URL + 'simpananidulfitri/c_simpananidulfitri/saveTrsIdulFitri',
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
                    var form        = Ext.getCmp('formsimpananidulfitri');
                    var grid        = Ext.getCmp('gridsimpananidulfitri');
                    var gridtrsidulfitri  = Ext.getCmp('gridtrsidulfitri');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Simpanan.SimpananIdulFitri.store.SimpananIdulFitri').reload();
                    me.getStore('BMT.module.Simpanan.SimpananIdulFitri.store.TrsIdulFitri').reload();
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
        var form        = Ext.getCmp('formsimpananidulfitri');
        var grid        = Ext.getCmp('gridsimpananidulfitri');
        var gridtrsidulfitri  = Ext.getCmp('gridtrsidulfitri');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Simpanan.SimpananIdulFitri.store.SimpananIdulFitri').reload();
        me.getStore('BMT.module.Simpanan.SimpananIdulFitri.store.TrsIdulFitri').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {simpananidulfitriname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Simpanan.SimpananIdulFitri.store.SimpananIdulFitri');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananidulfitri/c_simpananidulfitri/printAnggota/';
    },
});