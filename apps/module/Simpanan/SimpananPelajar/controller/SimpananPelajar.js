Ext.define('BMT.module.Simpanan.SimpananPelajar.controller.SimpananPelajar',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananPelajar.store.SimpananPelajar');
        me.getStore('BMT.module.Simpanan.SimpananPelajar.store.TrsPelajar');
		me.control({
			"gridsimpananpelajar" 							  : {
				itemclick: me.viewTrsPelajar
			},
			"gridsimpananpelajar  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananpelajar  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananpelajar  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananpelajarorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananpelajar textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananpelajar button[action=print]"        : {
               click: me.print
            },
            "formsimpananpelajar button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Simpanan.SimpananPelajar.store.SimpananPelajar').reload();
	},

	viewTrsPelajar: function(grid, record, item, index, e, eOpts){
        var form = Ext.getCmp('formsimpananpelajar');
        var grid = Ext.getCmp('gridtrspelajar');
        form.getForm().setValues(record.data);

     	var id = record.data.id;
        Ext.Ajax.request({
            url     : BASE_URL + 'simpananpelajar/c_simpananpelajar/getTrsPelajar',
            method  : 'POST',
            params  : {post : Ext.encode(id)},
            success : function(response){
                var data        = Ext.decode(response.responseText);
                var storeTrsPelajar = Ext.getStore('BMT.module.Simpanan.SimpananPelajar.store.TrsPelajar');
                storeTrsPelajar.loadData([],false);
                storeTrsPelajar.add(data.data);
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
            url     : BASE_URL + 'simpananpelajar/c_simpananpelajar/saveTrsPelajar',
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
                    var form        = Ext.getCmp('formsimpananpelajar');
                    var grid        = Ext.getCmp('gridsimpananpelajar');
                    var gridtrspelajar  = Ext.getCmp('gridtrspelajar');
                    form.getForm().reset();
                    grid.getSelectionModel().deselectAll();
                    me.getStore('BMT.module.Simpanan.SimpananPelajar.store.SimpananPelajar').reload();
                    me.getStore('BMT.module.Simpanan.SimpananPelajar.store.TrsPelajar').reload();
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
        var form        = Ext.getCmp('formsimpananpelajar');
        var grid        = Ext.getCmp('gridsimpananpelajar');
        var gridtrspelajar  = Ext.getCmp('gridtrspelajar');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.Simpanan.SimpananPelajar.store.SimpananPelajar').reload();
        me.getStore('BMT.module.Simpanan.SimpananPelajar.store.TrsPelajar').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {simpananpelajarname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Simpanan.SimpananPelajar.store.SimpananPelajar');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananpelajar/c_simpananpelajar/printAnggota/';
    },
});