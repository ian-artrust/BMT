Ext.define('BMT.module.Modal.SimpananPemupukan.controller.SimpananPemupukan',{
	extend 	: 'Ext.app.Controller',
    CheckedDataEdit: [],

	init: function(){
		var me = this;
		me.getStore('BMT.module.Modal.SimpananPemupukan.store.SimpananPemupukan');
		me.control({
			"gridsimpananpemupukan" 							  : {
				itemclick: me.loadForm
			},
			"gridsimpananpemupukan  button[action=delete]"      : {
                click: me.del
            },           
            "formsimpananpemupukan  button[action=save]"        : {
                click: me.save
            }, 
            "formsimpananpemupukan  button[action=reset]"       : {
                click: me.reset
            },
            "gridsimpananpemupukanorg"                          : {
               itemdblclick: me.addorg
            },
            "gridsimpananpemupukan textfield[action=search]"    : {
               keypress: me.search
            },
            "gridsimpananpemupukan button[action=print]"        : {
               click: me.print
            },
            "formsimpananpemupukan button[action=update]"       : {
               click: me.update
            }
		});
	},

	reloadStore : function(){
		var me = this;
		me.getStore('BMT.module.Modal.SimpananPemupukan.store.SimpananPemupukan').reload();
	},

	loadForm: function(grid, record, item, index, e, eOpts){
		var id 		= record.data.id;
		var form 	= Ext.getCmp('formsimpananpemupukan');
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
                        url             : BASE_URL + 'simpananpemupukan/c_simpananpemupukan/delSimpananPemupukan',
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
                                var form    = Ext.getCmp('formsimpananpemupukan');
                                var grid    = Ext.getCmp('gridsimpananpemupukan');
                                var pic     = form.queryById('imagePreview');
                                pic.setSrc('');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
			                    Ext.ComponentQuery.query('#gridsimpananpemupukan')[0].getStore('BMT.module.Modal.SimpananPemupukan.store.SimpananPemupukan').reload(); 
			                    me.getStore('BMT.module.Modal.SimpananPemupukan.store.SimpananPemupukan').reload();
                            }
                        }
                    });
                }
            }
        })
    },

    reset: function(btn) {//Reset Form
        var me = this;
        var form    = Ext.getCmp('formsimpananpemupukan');
        var grid    = Ext.getCmp('gridsimpananpemupukan');
        var pic     = form.queryById('imagePreview');
        pic.setSrc('');
        form.getForm().reset();

        grid.getSelectionModel().clearSelections();
        me.getStore('BMT.module.Modal.SimpananPemupukan.store.SimpananPemupukan').reload();
    },	

    
    
    search: function(field, evt, opts){
        var value       = field.getValue();
            Ext.Ajax.request({
                url     : BASE_URL + 'simpananpemupukan/c_simpananpemupukan/searchSimpananPemupukan',
                method  : 'POST',
                params  : {simpananpemupukanname : value},
                success : function(response){
                    var data    = Ext.JSON.decode(response.responseText);
                    if(data.success){
                            var storeApproval = Ext.getStore('BMT.module.Modal.SimpananPemupukan.store.SimpananPemupukan');
                            storeApproval.removeAll();
                            storeApproval.add(data.data);
                    }
                }
            });
    },

    print : function(){
        window.location = BASE_URL + 'simpananpemupukan/c_simpananpemupukan/printSimpananPemupukan/';
    },
});