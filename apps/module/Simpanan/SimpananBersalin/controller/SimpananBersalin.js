Ext.define('BMT.module.Simpanan.SimpananBersalin.controller.SimpananBersalin',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananBersalin.store.SimpananBersalin');
        me.getStore('BMT.module.Simpanan.SimpananBersalin.store.TrsBersalin');
		me.control({
			"gridsimpananbersalin" 							  : {
				itemclick: me.viewTrsBersalin
			},
			"gridsimpananbersalin  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananbersalin  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananbersalin  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananbersalinorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananbersalin textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananbersalin button[action=print]"        : {
               click: me.print
            },
            "formsimpananbersalin button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananBersalin.store.SimpananBersalin').reload();
	},

	viewTrsBersalin: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formsimpananbersalin');
        var grid = Ext.getCmp('gridtrsbersalin');
        form.getForm().setValues(record.data);

     	var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'simpananbersalin/c_simpananbersalin/getTrsBersalin',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data        = Ext.decode(response.responseText);
                var storeTrsBersalin = Ext.getStore('BMT.module.Simpanan.SimpananBersalin.store.TrsBersalin');
                storeTrsBersalin.loadData([],false);
                storeTrsBersalin.add(data.data);
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
            url     : BASE_URL + 'simpananbersalin/c_simpananbersalin/saveTrsBersalin',
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
                    var form        = Ext.getCmp('formsimpananbersalin');
                    var grid        = Ext.getCmp('gridsimpananbersalin');
                    var gridtrsbersalin  = Ext.getCmp('gridtrsbersalin');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Simpanan.SimpananBersalin.store.SimpananBersalin').reload();
                    me.getStore('BMT.module.Simpanan.SimpananBersalin.store.TrsBersalin').reload();
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
        var form        = Ext.getCmp('formsimpananbersalin');
        var grid        = Ext.getCmp('gridsimpananbersalin');
        var gridtrsbersalin  = Ext.getCmp('gridtrsbersalin');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Simpanan.SimpananBersalin.store.SimpananBersalin').reload();
        me.getStore('BMT.module.Simpanan.SimpananBersalin.store.TrsBersalin').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {simpananbersalinname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Simpanan.SimpananBersalin.store.SimpananBersalin');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananbersalin/c_simpananbersalin/printAnggota/';
    },
});