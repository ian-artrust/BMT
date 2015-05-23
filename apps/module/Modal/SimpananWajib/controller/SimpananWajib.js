Ext.define('BMT.module.Modal.SimpananWajib.controller.SimpananWajib',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Modal.SimpananWajib.store.SimpananWajib');
		me.control({
			"gridsimpananwajib" 							  : {
				itemclick: me.loadForm
			},
			"gridsimpananwajib  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananwajib  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananwajib  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananwajiborg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananwajib textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananwajib button[action=print]"        : {
               click: me.print
            },
            "formsimpananwajib button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Modal.SimpananWajib.store.SimpananWajib').reload();
	},

	loadForm: function(grid, record, item, index, e, eOpts){
		var id 		= record.data.id;
		var form 	= Ext.getCmp('formsimpananwajib');
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
                        url             : BASE_URL + 'simpananwajib/c_simpananwajib/delSimpananWajib',
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
                                var form    = Ext.getCmp('formsimpananwajib');
                                var grid    = Ext.getCmp('gridsimpananwajib');
                                var pic     = form.queryById('imagePreview');
                                pic.setSrc('');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
			                    Ext.ComponentQuery.query('#gridsimpananwajib')[0].getStore('BMT.module.Modal.SimpananWajib.store.SimpananWajib').reload(); 
			                    me.getStore('BMT.module.Modal.SimpananWajib.store.SimpananWajib').reload();
                            }
                        }
                    });
                }
            }
        })
    },

    reset: function(btn) {//Reset Form
        var me = this;
        var form    = Ext.getCmp('formsimpananwajib');
        var grid    = Ext.getCmp('gridsimpananwajib');
        var pic     = form.queryById('imagePreview');
        pic.setSrc('');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('BMT.module.Modal.SimpananWajib.store.SimpananWajib').reload();
    },	

    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'simpananwajib/c_simpananwajib/searchSimpananWajib',
                method  : 'POST',
                params  : {simpananwajibname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Modal.SimpananWajib.store.SimpananWajib');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananwajib/c_simpananwajib/printSimpananWajib/';
    },
});