Ext.define('BMT.controller.Dashboard',{
	extend	: 'Ext.app.Controller',
	init: function(){
		var me = this;
		me.control({
			'viewport button[action=logout]' : {
				click : me.logout
			},

			'viewport button[action=editPassword]'	: {
				click : me.editpassword
			}, 

			'rubahpassword button[action=rubah]'	: {
				click : me.rubah
			}
		});
		me.callParent(arguments);
	},

	logout : function(button){
		Ext.MessageBox.show({
            title           : 'Informasi',
            msg             : 'Anda Berhasil Logout',
            buttons         : Ext.Msg.OK,
            icon            : Ext.MessageBox.INFO,
            closable 		: false,
            width           : 450,
            fn              : function(btn, evtObj){
            	if (btn == 'ok') {
            		window.location = BASE_URL + 'welcome/logout';
            	}
            }
        });
		
	},

	editpassword : function(button){
		Ext.create('BMT.view.form.RubahPassword').load();
	},

	rubah : function(btn){
        var me          = this;
        var win         = btn.up('window');
        var form        = win.down('form').getForm();
        var oldpswd     = form.findField('oldpswd').getValue();
        var newpswd     = form.findField('newpswd').getValue();
        var konfpswd    = form.findField('konfpswd').getValue();
        Ext.MessageBox.show({
            title           : 'Konfirmasi',
            msg             : 'Anda yakin akan merubah Password?',
            buttons         : Ext.Msg.YESNO,
            icon            : Ext.MessageBox.WARNING,
            width           : 450,
            fn              : function(btn, evtObj){
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url     : BASE_URL + 'user/c_users/editPswd',
                        method  : 'POST',
                        params  : {
                            oldpswd     : oldpswd,
                            newpswd     : newpswd,
                            konfpswd    : konfpswd
                        },
                        success : function(response){
                            var data    = Ext.JSON.decode(response.responseText);
                            if(data.total === 1){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Password Lama Salah',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                            } else if(data.total === 2) {
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : 'Pengisian Password Baru  dan Retype Password Tidak Sama',
                                    icon            : Ext.MessageBox.ERROR,
                                    buttons         : Ext.MessageBox.OK
                                });                   
                            } else {
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : 'Password Telah Dirubah',
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });                                
                            }
                        }
                    });
                }
            }
        });      
    } 
});