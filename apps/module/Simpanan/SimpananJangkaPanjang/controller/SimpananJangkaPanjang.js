Ext.define('BMT.module.Simpanan.SimpananJangkaPanjang.controller.SimpananJangkaPanjang',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananJangkaPanjang.store.SimpananJangkaPanjang');
        me.getStore('BMT.module.Simpanan.SimpananJangkaPanjang.store.TrsJangkaPanjang');
		me.control({
			"gridsimpananjangkapanjang" 							  : {
				itemclick: me.viewTrsJangkaPanjang
			},
			"gridsimpananjangkapanjang  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananjangkapanjang  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananjangkapanjang  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananjangkapanjangorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananjangkapanjang textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananjangkapanjang button[action=print]"        : {
               click: me.print
            },
            "formsimpananjangkapanjang button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananJangkaPanjang.store.SimpananJangkaPanjang').reload();
	},

	viewTrsJangkaPanjang: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formsimpananjangkapanjang');
        var grid = Ext.getCmp('gridtrsjangkapanjang');
        form.getForm().setValues(record.data);

     	var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'simpananjangkapanjang/c_simpananjangkapanjang/getTrsJangkaPanjang',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data        = Ext.decode(response.responseText);
                var storeTrsJangkaPanjang = Ext.getStore('BMT.module.Simpanan.SimpananJangkaPanjang.store.TrsJangkaPanjang');
                storeTrsJangkaPanjang.loadData([],false);
                storeTrsJangkaPanjang.add(data.data);
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
            url     : BASE_URL + 'simpananjangkapanjang/c_simpananjangkapanjang/saveTrsJangkaPanjang',
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
                    var form        = Ext.getCmp('formsimpananjangkapanjang');
                    var grid        = Ext.getCmp('gridsimpananjangkapanjang');
                    var gridtrsjangkapanjang  = Ext.getCmp('gridtrsjangkapanjang');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Simpanan.SimpananJangkaPanjang.store.SimpananJangkaPanjang').reload();
                    me.getStore('BMT.module.Simpanan.SimpananJangkaPanjang.store.TrsJangkaPanjang').reload();
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
        var form        = Ext.getCmp('formsimpananjangkapanjang');
        var grid        = Ext.getCmp('gridsimpananjangkapanjang');
        var gridtrsjangkapanjang  = Ext.getCmp('gridtrsjangkapanjang');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Simpanan.SimpananJangkaPanjang.store.SimpananJangkaPanjang').reload();
        me.getStore('BMT.module.Simpanan.SimpananJangkaPanjang.store.TrsJangkaPanjang').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {simpananjangkapanjangname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Simpanan.SimpananJangkaPanjang.store.SimpananJangkaPanjang');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananjangkapanjang/c_simpananjangkapanjang/printAnggota/';
    },
});