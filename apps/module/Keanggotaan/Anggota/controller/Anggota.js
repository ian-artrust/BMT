Ext.define('BMT.module.Keanggotaan.Anggota.controller.Anggota',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Keanggotaan.Anggota.store.Anggota');
		me.control({
			"gridanggota" 							  : {
				itemclick: me.loadForm
			},
			"gridanggota  button[action=delete]"      : {
                click: me.del
            },           
            "formanggota  button[action=save]"        : {
                click: me.save
            }, 
            "formanggota  button[action=reset]"       : {
                click: me.reset
            },
            "gridanggotaorg"                          : {
               itemdblclick: me.addorg
            },
            "gridanggota textfield[action=search]"    : {
               keypress: me.search
            },
            "gridanggota button[action=print]"        : {
               click: me.print
            },
            "formanggota button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Keanggotaan.Anggota.store.Anggota').reload();
	},

	loadForm: function(grid, record, item, index, e, eOpts){
		var id 		= record.data.id;
		var form 	= Ext.getCmp('formanggota');
		form.getForm().setValues(record.data);
        var pic     = form.queryById('imagePreview');
        pic.setSrc(record.data.userfile);
        form.getForm().setValues(record.data);

        var saveButton = form.down('button[text=Simpan]');
        saveButton.setDisabled(true);
        var updateButton = form.down('button[text=Edit]');
        updateButton.setDisabled(false);
	},

	del: function(gridPanel, selected){
        var me = this;
        me.CheckedDataEdit = new Array();
        var record = gridPanel.up('grid').getSelectionModel().getSelection();
        Ext.each(record, function(selected){
            me.CheckedDataEdit.push({
                id : selected.data.id
            });
        }); 

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan menghapus data yang terseleksi?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url             : BASE_URL + 'anggota/c_anggota/delAnggota',
                        method          : 'POST',
                        params          : {post : Ext.encode(me.CheckedDataEdit)},
                        success         : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            // console.log(data.msg);
                            if(data.msg === 1){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Data Digunakan di Table Lain',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });                             
                            } else {
                                var form    = Ext.getCmp('formanggota');
                                var grid    = Ext.getCmp('gridanggota');
                                var pic     = form.queryById('imagePreview');
                                pic.setSrc('');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
			                    Ext.ComponentQuery.query('#gridanggota')[0].getStore('BMT.module.Keanggotaan.Anggota.store.Anggota').reload(); 
			                    me.getStore('BMT.module.Keanggotaan.Anggota.store.Anggota').reload();
                            }
                        }
                    });
                }
            }
        })
    },

    reset: function(btn) {//Reset Form
        var me = this;
        var form    = Ext.getCmp('formanggota');
        var grid    = Ext.getCmp('gridanggota');
        var pic     = form.queryById('imagePreview');
        pic.setSrc('');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('BMT.module.Keanggotaan.Anggota.store.Anggota').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'anggota/c_anggota/searchAnggota',
                method  : 'POST',
                params  : {anggotaname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Keanggotaan.Anggota.store.Anggota');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'anggota/c_anggota/printAnggota/';
    },
});