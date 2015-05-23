Ext.define('BMT.module.GeneralSetup.DataMaster.DataKaryawan.controller.DataKaryawan',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.GeneralSetup.DataMaster.DataKaryawan.store.DataKaryawan');
		me.control({
			"griddatakaryawan" 							  : {
				select: me.loadForm
			},
			"griddatakaryawan  button[action=delete]"      : {
                click: me.del
            },           
            "formdatakaryawan  button[action=save]"        : {
                click: me.save
            }, 
            "formdatakaryawan  button[action=reset]"       : {
                click: me.resetPanel
            },
            "griddatakaryawanorg"                          : {
               itemdblclick: me.addorg
            },
            "griddatakaryawan textfield[action=search]"    : {
               keypress: me.search
            },
            "griddatakaryawan button[action=print]"        : {
               click: me.print
            },
            "formdatakaryawan button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.GeneralSetup.DataMaster.DataKaryawan.store.DataKaryawan').reload();
	},

	loadForm: function(grid, record, item, index, e, eOpts){
		var id 		= record.data.id;
		var form 	= Ext.getCmp('formdatakaryawan');
		form.getForm().setValues(record.data);
        var pic     = form.queryById('imagePreview');
        pic.setSrc(record.data.userfile);
        form.getForm().setValues(record.data);

        var saveButton = form.down('button[text=Simpan]');
        saveButton.setDisabled(true);
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
                        url             : BASE_URL + 'datakaryawan/c_datakaryawan/delDataKaryawan',
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
                                var form    = Ext.getCmp('formdatakaryawan');
                                var grid    = Ext.getCmp('griddatakaryawan');
                                var pic     = form.queryById('imagePreview');
                                pic.setSrc('');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
			                    Ext.ComponentQuery.query('#griddatakaryawan')[0].getStore('BMT.module.GeneralSetup.DataMaster.DataKaryawan.store.DataKaryawan').reload(); 
			                    me.getStore('BMT.module.GeneralSetup.DataMaster.DataKaryawan.store.DataKaryawan').reload();
                            }
                        }
                    });
                }
            }
        })
    },

    resetPanel: function(btn) {//Reset Form
        var me = this;
        var form    = Ext.getCmp('formdatakaryawan');
        var grid    = Ext.getCmp('griddatakaryawan');
        var pic     = form.queryById('imagePreview');
        pic.setSrc('');
        form.getForm().reset();

        var saveButton = form.down('button[text=Simpan]');
        saveButton.setDisabled(false);

        var editButton = form.down('button[text=Edit]');
        editButton.setDisabled(true);

        grid.getSelectionModel().clearSelections();
        me.getStore('BMT.module.GeneralSetup.DataMaster.DataKaryawan.store.DataKaryawan').reload();
    },	

      
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'datakaryawan/c_datakaryawan/searchDataKaryawan',
                method  : 'POST',
                params  : {datakaryawanname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.GeneralSetup.DataMaster.DataKaryawan.store.DataKaryawan');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'datakaryawan/c_datakaryawan/printDataKaryawan/';
    },
});