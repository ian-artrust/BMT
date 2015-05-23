Ext.define('BMT.module.GeneralSetup.DataMaster.COA.controller.COA',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.GeneralSetup.DataMaster.COA.store.COA');
		me.control({
			"gridcoa" 							  : {
				itemclick: me.loadForm
			},
			"gridcoa  button[action=delete]"      : {
                click: me.del
            },           
            "formcoa  button[action=save]"        : {
                click: me.save
            }, 
            "formcoa  button[action=reset]"       : {
                click: me.reset
            },
            "gridcoa textfield[action=search]"    : {
               keypress: me.search
            },
            "gridcoa button[action=print]"        : {
               click: me.print
            },
            "formcoa button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.GeneralSetup.DataMaster.COA.store.COA').reload();
	},

	loadForm: function(grid, record, item, index, e, eOpts){
		var id 		= record.data.id;
		var form 	= Ext.getCmp('formcoa');
		form.getForm().setValues(record.data);
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
                        url             : BASE_URL + 'coa/c_coa/delCOA',
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
                                var form    = Ext.getCmp('formcoa');
                                var grid    = Ext.getCmp('gridcoa');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
			                    Ext.ComponentQuery.query('#gridcoa')[0].getStore('BMT.module.GeneralSetup.DataMaster.COA.store.COA').reload(); 
			                    me.getStore('BMT.module.GeneralSetup.DataMaster.COA.store.COA').reload();
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
        var account         = form.findField('account').getValue();
        var nama_account     = form.findField('nama_account').getValue();

        Ext.Ajax.request({
            url     : BASE_URL + 'coa/c_coa/saveCOA',
            method  : 'POST',
            params  : {
                account         : account,
                nama_account    : nama_account
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
                    var form    = Ext.getCmp('formcoa');
                    var grid    = Ext.getCmp('gridcoa');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridcoa')[0].getStore('BMT.module.GeneralSetup.DataMaster.COA.store.COA').reload();
                }else if (data.total === 2){
                    Ext.MessageBox.show({
                        title           : 'Error',
                        msg             : 'Data Telah Terdaftar - Silahkan Gunakan COA Lain',
                        icon            : Ext.MessageBox.ERROR,
                        buttons         : Ext.MessageBox.OK
                    });
                    var form    = Ext.getCmp('formcoa');
                    var grid    = Ext.getCmp('gridcoa');
                    form.getForm().reset();
                    me.resetPanel();
                    grid.getSelectionModel().deselectAll();
                    Ext.ComponentQuery.query('#gridcoa')[0].getStore('BMT.module.GeneralSetup.DataMaster.COA.store.COA').reload();
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
        var account         = form.findField('account').getValue();
        var nama_account    = form.findField('nama_account').getValue();

        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah data?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'coa/c_coa/editCOA',
                        method  : 'POST',
                        params  : {
                            id              : id,
                            account         : account,
                            nama_account    : nama_account
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
                                var form    = Ext.getCmp('formcoa');
                                var grid    = Ext.getCmp('gridcoa');
                                form.getForm().reset();
                                me.resetPanel();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridcoa')[0].getStore('BMT.module.GeneralSetup.DataMaster.COA.store.COA').reload();
                            }else if (data.total === 2){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'COA Telah Terdaftar - Silahkan Gunakan COA Lain',
                                    icon            : Ext.MessageBox.ERROR,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formcoa');
                                var grid    = Ext.getCmp('gridcoa');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
                                 Ext.ComponentQuery.query('#gridcoa')[0].getStore('BMT.module.GeneralSetup.DataMaster.COA.store.COA').reload();
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

    reset: function(btn) {//Reset Form
        var me = this;
        var form    = Ext.getCmp('formcoa');
        var grid    = Ext.getCmp('gridcoa');
        var pic     = form.queryById('imagePreview');
        pic.setSrc('');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('BMT.module.GeneralSetup.DataMaster.COA.store.COA').reload();
    },	
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'coa/c_coa/searchCOA',
                method  : 'POST',
                params  : {coaname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.GeneralSetup.DataMaster.COA.store.COA');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'coa/c_coa/printCOA/';
    },
});