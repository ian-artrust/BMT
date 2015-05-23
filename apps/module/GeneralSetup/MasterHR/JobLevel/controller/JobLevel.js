Ext.define('BMT.module.GeneralSetup.MasterHR.JobLevel.controller.JobLevel',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel');
		me.control({
			"gridjoblevel" 							  : {
				select: me.loadForm
			},
			"gridjoblevel  button[action=delete]"      : {
                click: me.del
            },           
            "formjoblevel  button[action=save]"        : {
                click: me.save
            }, 
            "formjoblevel  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridjoblevelorg"                          : {
               itemdblclick: me.addorg
            },
            "gridjoblevel textfield[action=search]"    : {
               keypress: me.search
            },
            "gridjoblevel button[action=print]"        : {
               click: me.print
            },
            "formjoblevel button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel').reload();
	},

	loadForm: function(grid, record, item, index, e, eOpts){
		var id 		= record.data.id;
		var form 	= Ext.getCmp('formjoblevel');
		form.getForm().setValues(record.data);
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
                        url             : BASE_URL + 'joblevel/c_joblevel/delJobLevel',
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
                                var form    = Ext.getCmp('formjoblevel');
                                var grid    = Ext.getCmp('gridjoblevel');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
			                    Ext.ComponentQuery.query('#gridjoblevel')[0].getStore('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel').reload(); 
			                    me.getStore('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel').reload();
                            }
                        }
                    });
                }
            }
        })
    },

    save: function(btn, evt, opts){
        var me              = this;
        var form            = btn.up('form').getForm();
        var name_joblevel   = form.findField('name_joblevel').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'joblevel/c_joblevel/saveJobLevel',
            method  : 'POST',
            params  : {
                name_joblevel : name_joblevel
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
                    var form    = Ext.getCmp('formjoblevel');
                    var grid    = Ext.getCmp('gridjoblevel');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridjoblevel')[0].getStore('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel').reload();
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Data Telah Terdaftar - Silahkan Gunakan JobLevel Lain',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    });
                    var form    = Ext.getCmp('formjoblevel');
                    var grid    = Ext.getCmp('gridjoblevel');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridjoblevel')[0].getStore('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel').reload();
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

    update: function(btn, evt, opts){
        var me              = this;
        var form            = btn.up('form').getForm();
        var id              = form.findField('id').getValue();
        var name_joblevel   = form.findField('name_joblevel').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'joblevel/c_joblevel/editJobLevel',
                        method  : 'POST',
                        params  : {
                            id              : id,
                            name_joblevel   : name_joblevel,
                        },
                        success : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            // console.log(data.total);
                            if(data.total === 1){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Data Telah Dirubah',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formjoblevel');
                                var grid    = Ext.getCmp('gridjoblevel');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridjoblevel')[0].getStore('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel').reload();
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'JobLevel Telah Terdaftar - Silahkan Gunakan JobLevel Lain',
                                    icon            : Ext.MessageBox.ERROR,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formjoblevel');
                                var grid    = Ext.getCmp('gridjoblevel');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
                                 Ext.ComponentQuery.query('#gridjoblevel')[0].getStore('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel').reload();
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
                }
            }
        });
    },

    resetPanel: function(btn, gridPanel, selected) {//Reset Form
        var me = this;
        var form    = Ext.getCmp('formjoblevel');
        var grid    = Ext.getCmp('gridjoblevel');
        form.getForm().reset();

        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'joblevel/c_joblevel/searchJobLevel',
                method  : 'POST',
                params  : {name : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'joblevel/c_joblevel/printJobLevel/';
    },
});