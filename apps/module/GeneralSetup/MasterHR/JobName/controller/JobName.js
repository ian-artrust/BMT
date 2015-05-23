Ext.define('BMT.module.GeneralSetup.MasterHR.JobName.controller.JobName',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName');
		me.control({
			"gridjobname" 							  : {
				select: me.loadForm
			},
			"gridjobname  button[action=delete]"      : {
                click: me.del
            },           
            "formjobname  button[action=save]"        : {
                click: me.save
            }, 
            "formjobname  button[action=reset]"       : {
                click: me.resetPanel
            },
            "gridjobnameorg"                          : {
               itemdblclick: me.addorg
            },
            "gridjobname textfield[action=search]"    : {
               keypress: me.search
            },
            "gridjobname button[action=print]"        : {
               click: me.print
            },
            "formjobname button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName').reload();
	},

	loadForm: function(grid, record, item, index, e, eOpts){
		var id 		= record.data.id;
		var form 	= Ext.getCmp('formjobname');
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
                        url             : BASE_URL + 'jobname/c_jobname/delJobName',
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
                                var form    = Ext.getCmp('formjobname');
                                var grid    = Ext.getCmp('gridjobname');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
			                    Ext.ComponentQuery.query('#gridjobname')[0].getStore('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName').reload(); 
			                    me.getStore('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName').reload();
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
        var jobname         = form.findField('jobname').getValue();
        var id_joblevel     = form.findField('id_joblevel').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'jobname/c_jobname/saveJobName',
            method  : 'POST',
            params  : {
                jobname       : jobname,
                id_joblevel   : id_joblevel
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
                    var form    = Ext.getCmp('formjobname');
                    var grid    = Ext.getCmp('gridjobname');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridjobname')[0].getStore('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName').reload();
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Data Telah Terdaftar - Silahkan Gunakan JobName Lain',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    });
                    var form    = Ext.getCmp('formjobname');
                    var grid    = Ext.getCmp('gridjobname');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridjobname')[0].getStore('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName').reload();
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
        var jobname         = form.findField('jobname').getValue();
        var id_joblevel     = form.findField('id_joblevel').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'jobname/c_jobname/editJobName',
                        method  : 'POST',
                        params  : {
                            id              : id,
                            jobname         : jobname,
                            id_joblevel     : id_joblevel,
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
                                var form    = Ext.getCmp('formjobname');
                                var grid    = Ext.getCmp('gridjobname');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridjobname')[0].getStore('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName').reload();
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'JobName Telah Terdaftar - Silahkan Gunakan JobName Lain',
                                    icon            : Ext.MessageBox.ERROR,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formjobname');
                                var grid    = Ext.getCmp('gridjobname');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
                                 Ext.ComponentQuery.query('#gridjobname')[0].getStore('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName').reload();
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

    resetPanel: function(btn) {//Reset Form
        var me = this;
        var form    = Ext.getCmp('formjobname');
        var grid    = Ext.getCmp('gridjobname');
        form.getForm().reset();
        grid.getSelectionModel().deselectAll();
        me.getStore('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName').reload();
    },	
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'jobname/c_jobname/searchJobName',
                method  : 'POST',
                params  : {jobnamename : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'jobname/c_jobname/printJobName/';
    },
});