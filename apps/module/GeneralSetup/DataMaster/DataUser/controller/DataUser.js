Ext.define('BMT.module.GeneralSetup.DataMaster.DataUser.controller.DataUser',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.GeneralSetup.DataMaster.DataUser.store.DataUser');
		me.control({
			"griddatauser" 							  : {
				itemclick: me.loadForm
			},
			"griddatauser  button[action=delete]"      : {
                click: me.del
            },           
            "formdatauser  button[action=save]"        : {
                click: me.save
            }, 
            "formdatauser  button[action=reset]"       : {
                click: me.reset
            },
            "griddatauserorg"                          : {
               itemdblclick: me.addorg
            },
            "griddatauser textfield[action=search]"    : {
               keypress: me.search
            },
            "griddatauser button[action=print]"        : {
               click: me.print
            },
            "formdatauser button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.GeneralSetup.DataMaster.DataUser.store.DataUser').reload();
	},

	loadForm: function(grid, record, item, index, e, eOpts){
		var id 		= record.data.id;
		var form 	= Ext.getCmp('formdatauser');
		form.getForm().setValues(record.data);
        var pic     = form.queryById('imagePreview');
        pic.setSrc(record.data.userfile);
        form.getForm().setValues(record.data);

        var saveButton = form.down('button[text=Save]');
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
                        url             : BASE_URL + 'datauser/c_datauser/delDataUser',
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
                                var form    = Ext.getCmp('formdatauser');
                                var grid    = Ext.getCmp('griddatauser');
                                var pic     = form.queryById('imagePreview');
                                pic.setSrc('');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
			                    Ext.ComponentQuery.query('#griddatauser')[0].getStore('BMT.module.GeneralSetup.DataMaster.DataUser.store.DataUser').reload(); 
			                    me.getStore('BMT.module.GeneralSetup.DataMaster.DataUser.store.DataUser').reload();
                            }
                        }
                    });
                }
            }
        });
    },

    update: function(btn, evt, opts){
        var me          = this;
        var form        = btn.up('form').getForm();
        var id          = form.findField('id').getValue();
        var username    = form.findField('username').getValue();
        var password    = form.findField('password').getValue();
        var level       = form.findField('level').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'datauser/c_datauser/saveDataUser',
            method  : 'POST',
            params  : {
                id          : id,
                username    : username,
                password    : password,
                level       : level
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
                    var form    = Ext.getCmp('formdatauser');
                    var grid    = Ext.getCmp('griddatauser');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#griddatauser')[0].getStore('BMT.module.GeneralSetup.DataMaster.DataUser.store.DataUser').reload();
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Data Telah Terdaftar - Silahkan Gunakan DataUser Lain',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    });
                    var form    = Ext.getCmp('formdatauser');
                    var grid    = Ext.getCmp('griddatauser');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#griddatauser')[0].getStore('BMT.module.GeneralSetup.DataMaster.DataUser.store.DataUser').reload();
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
        var form    = Ext.getCmp('formdatauser');
        var grid    = Ext.getCmp('griddatauser');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('BMT.module.GeneralSetup.DataMaster.DataUser.store.DataUser').reload();
    },	

    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'datauser/c_datauser/searchDataUser',
                method  : 'POST',
                params  : {datausername : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.GeneralSetup.DataMaster.DataUser.store.DataUser');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'datauser/c_datauser/printDataUser/';
    },
});