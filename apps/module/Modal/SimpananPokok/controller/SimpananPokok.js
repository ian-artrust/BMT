Ext.define('BMT.module.Modal.SimpananPokok.controller.SimpananPokok',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Modal.SimpananPokok.store.SimpananPokok');
		me.control({
			"gridsimpananpokok" 							  : {
				itemclick: me.loadForm
			},
			"gridsimpananpokok  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananpokok  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananpokok  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananpokokorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananpokok textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananpokok button[action=print]"        : {
               click: me.print
            },
            "formsimpananpokok button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Modal.SimpananPokok.store.SimpananPokok').reload();
	},

	loadForm: function(grid, record, item, index, e, eOpts){
		var id 		= record.data.id;
		var form 	= Ext.getCmp('formsimpananpokok');
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
                        url             : BASE_URL + 'simpananpokok/c_simpananpokok/delSimpananPokok',
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
                                var form    = Ext.getCmp('formsimpananpokok');
                                var grid    = Ext.getCmp('gridsimpananpokok');
                                var pic     = form.queryById('imagePreview');
                                pic.setSrc('');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
			                    Ext.ComponentQuery.query('#gridsimpananpokok')[0].getStore('BMT.module.Modal.SimpananPokok.store.SimpananPokok').reload(); 
			                    me.getStore('BMT.module.Modal.SimpananPokok.store.SimpananPokok').reload();
                            }
                        }
                    });
                }
            }
        })
    },

    reset: function(btn) {//Reset Form
        var me = this;
        var form    = Ext.getCmp('formsimpananpokok');
        var grid    = Ext.getCmp('gridsimpananpokok');
        var pic     = form.queryById('imagePreview');
        pic.setSrc('');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('BMT.module.Modal.SimpananPokok.store.SimpananPokok').reload();
    },	

    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'simpananpokok/c_simpananpokok/searchSimpananPokok',
                method  : 'POST',
                params  : {simpananpokokname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Modal.SimpananPokok.store.SimpananPokok');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananpokok/c_simpananpokok/printSimpananPokok/';
    },
});