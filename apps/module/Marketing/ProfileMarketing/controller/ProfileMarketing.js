Ext.define('BMT.module.Marketing.ProfileMarketing.controller.ProfileMarketing',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Marketing.ProfileMarketing.store.ProfileMarketing');
		me.control({
			"gridprofilemarketing" 							  : {
				itemclick: me.loadFormng
			},
			"gridprofilemarketing  button[action=delete]"      : {
                click: me.del
            },           
            "formprofilemarketing  button[action=save]"        : {
                click: me.save
            }, 
            "formprofilemarketing  button[action=reset]"       : {
                click: me.reset
            },
            "gridprofilemarketingorg"                          : {
               itemdblclick: me.addorg
            },
            "gridprofilemarketing textfield[action=search]"    : {
               keypress: me.search
            },
            "gridprofilemarketing button[action=print]"        : {
               click: me.print
            },
            "formprofilemarketing button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Marketing.ProfileMarketing.store.ProfileMarketing').reload();
	},

	loadForm: function(grid, record, item, index, e, eOpts){
		var id 		= record.data.id;
		var form 	= Ext.getCmp('formprofilemarketing');
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
                        url             : BASE_URL + 'profilemarketing/c_profilemarketing/delProfileMarketing',
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
                                var form    = Ext.getCmp('formprofilemarketing');
                                var grid    = Ext.getCmp('gridprofilemarketing');
                                var pic     = form.queryById('imagePreview');
                                pic.setSrc('');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
			                    Ext.ComponentQuery.query('#gridprofilemarketing')[0].getStore('BMT.module.Marketing.ProfileMarketing.store.ProfileMarketing').reload(); 
			                    me.getStore('BMT.module.Marketing.ProfileMarketing.store.ProfileMarketing').reload();
                            }
                        }
                    });
                }
            }
        })
    },

    reset: function(btn) {//Reset Form
        var me = this;
        var form    = Ext.getCmp('formprofilemarketing');
        var grid    = Ext.getCmp('gridprofilemarketing');
        var pic     = form.queryById('imagePreview');
        pic.setSrc('');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('BMT.module.Marketing.ProfileMarketing.store.ProfileMarketing').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'profilemarketing/c_profilemarketing/searchProfileMarketing',
                method  : 'POST',
                params  : {profilemarketingname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Marketing.ProfileMarketing.store.ProfileMarketing');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'profilemarketing/c_profilemarketing/printProfileMarketing/';
    },
});