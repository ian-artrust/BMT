Ext.define('BMT.module.Simpanan.SimpananHariTua.controller.SimpananHariTua',{
    extend  : 'Ext.app.Controller',
    CheckedDataEdit: [],

    init: function(){
        var me = this;
        me.getStore('BMT.module.Simpanan.SimpananHariTua.store.SimpananHariTua');
        me.getStore('BMT.module.Simpanan.SimpananHariTua.store.TrsHariTua');
        me.control({
            "gridsimpananharitua"                            : {
                itemclick: me.viewTrsHariTua
            },
            "gridsimpananharitua  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananharitua  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananharitua  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananharituaorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananharitua textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananharitua button[action=print]"        : {
               click: me.print
            },
            "formsimpananharitua button[action=update]"       : {
               click: me.update
            }
        });
    },

    reloadStore : function(){
        var me = this;
        me.getStore('BMT.module.Simpanan.SimpananHariTua.store.SimpananHariTua').reload();
    },

    viewTrsHariTua: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formsimpananharitua');
        var grid = Ext.getCmp('gridtrsharitua');
        form.getForm().setValues(record.data);

        var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'simpananharitua/c_simpananharitua/getTrsHariTua',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data         = Ext.decode(response.responseText);
                var storeTrsHariTua = Ext.getStore('BMT.module.Simpanan.SimpananHariTua.store.TrsHariTua');
                storeTrsHariTua.loadData([],false);
                storeTrsHariTua.add(data.data);
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
            url     : BASE_URL + 'simpananharitua/c_simpananharitua/saveTrsHariTua',
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
                    var form        = Ext.getCmp('formsimpananharitua');
                    var grid        = Ext.getCmp('gridsimpananharitua');
                    var gridtrsharitua  = Ext.getCmp('gridtrsharitua');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Simpanan.SimpananHariTua.store.SimpananHariTua').reload();
                    me.getStore('BMT.module.Simpanan.SimpananHariTua.store.TrsHariTua').reload();
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
        var form        = Ext.getCmp('formsimpananharitua');
        var grid        = Ext.getCmp('gridsimpananharitua');
        var gridtrsharitua  = Ext.getCmp('gridtrsharitua');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Simpanan.SimpananHariTua.store.SimpananHariTua').reload();
        me.getStore('BMT.module.Simpanan.SimpananHariTua.store.TrsHariTua').reload();
    },  

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {simpananharituaname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Simpanan.SimpananHariTua.store.SimpananHariTua');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananharitua/c_simpananharitua/printAnggota/';
    },
});Ext.define('BMT.module.Simpanan.SimpananHariTua.controller.SimpananHariTua',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananHariTua.store.SimpananHariTua');
        me.getStore('BMT.module.Simpanan.SimpananHariTua.store.TrsHariTua');
		me.control({
			"gridsimpananharitua" 							  : {
				itemclick: me.viewTrsHariTua
			},
			"gridsimpananharitua  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananharitua  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananharitua  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananharituaorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananharitua textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananharitua button[action=print]"        : {
               click: me.print
            },
            "formsimpananharitua button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananHariTua.store.SimpananHariTua').reload();
	},

	viewTrsHariTua: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formsimpananharitua');
        var grid = Ext.getCmp('gridtrsharitua');
        form.getForm().setValues(record.data);

     	var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'simpananharitua/c_simpananharitua/getTrsHariTua',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data        = Ext.decode(response.responseText);
                var storeTrsHariTua = Ext.getStore('BMT.module.Simpanan.SimpananHariTua.store.TrsHariTua');
                storeTrsHariTua.loadData([],false);
                storeTrsHariTua.add(data.data);
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
            url     : BASE_URL + 'simpananharitua/c_simpananharitua/saveTrsHariTua',
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
                    var form        = Ext.getCmp('formsimpananharitua');
                    var grid        = Ext.getCmp('gridsimpananharitua');
                    var gridtrsharitua  = Ext.getCmp('gridtrsharitua');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Simpanan.SimpananHariTua.store.SimpananHariTua').reload();
                    me.getStore('BMT.module.Simpanan.SimpananHariTua.store.TrsHariTua').reload();
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
        var form        = Ext.getCmp('formsimpananharitua');
        var grid        = Ext.getCmp('gridsimpananharitua');
        var gridtrsharitua  = Ext.getCmp('gridtrsharitua');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Simpanan.SimpananHariTua.store.SimpananHariTua').reload();
        me.getStore('BMT.module.Simpanan.SimpananHariTua.store.TrsHariTua').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {simpananharituaname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Simpanan.SimpananHariTua.store.SimpananHariTua');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananharitua/c_simpananharitua/printAnggota/';
    },
});