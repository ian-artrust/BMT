Ext.define('BMT.module.Marketing.ProfileMarketing.view.form.FormProfileMarketing', {
    extend      : 'Ext.form.Panel',
    // store       : Ext.create('SMS.module.MasterData.store.ProfileMarketing'),
    // requires    : ['SMS.module.MasterData.store.ProfileMarketing'],
    alias       : 'widget.formprofilemarketing',
    id          : 'formprofilemarketing',
    layout      : 'fit',
    modal       : true,
    border      : false,
    frame       : true,
    margins     : '3px',
    initComponent: function() {
        var me = this;
        me.items  = [
            {
                xtype       : 'form',
                extend      : 'Ext.form.Panel',
                bodyPadding : 5,
                frame       : true,
                border      : false,
                items       : [
                    {
                        xtype       : 'textfield',
                        name        : 'id',
                        hidden      : true,
                        fieldLabel  : 'ID',                    
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : { anchor : '100%'},
                        items       : [{
                            xtype   : 'fieldcontainer',
                            layout  : 'hbox',
                            items   : [
                                {
                                    xtype       : 'textfield',
                                    name        : 'nama_lengkap',
                                    allowBlank  : true,
                                    fieldLabel  : 'Nama Lengkap',
                                    emptyText   : 'Nama Lengkap',
                                    anchor      : '100%',
                                    padding     : '0px 2px 0px 2px',
                                    margin      : '0px 15px 0px 2px',
                                    flex        : 1
                                }
                            ]
                        }]
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : {
                            anchor  : '100%'
                        },
                        anchor          : '100%',
                        items       : [
                            {
                                xtype       : 'fieldcontainer',
                                layout      : 'hbox',
                                items       : [
                                    {
                                        fieldLabel      : 'ID Card',
                                        emptyText       : 'Select ID Card',
                                        tooltip         : 'Select ID Card',
                                        queryMode       : 'local',
                                        name            : 'card_id',
                                        xtype           : 'combobox',
                                        // store           : Ext.create('SMS.module.MasterData.store.idcard'),
                                        displayField    : 'name',
                                        valueField      : 'id',
                                        padding     : '0px 2px 0px 2px',
                                        flex            : 1
                                    },
                                    {
                                        emptyText       : 'Type ID Card Number',
                                        tooltip         : 'Type ID Card Number',
                                        name            : 'no_ktp',
                                        xtype           : 'textfield',
                                        editable        : true,
                                        anchor          : '100%',
                                        padding         : '0px 2px 0px 2px',
                                        flex            : 1
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : {
                            anchor  : '100%'
                        },
                        anchor          : '100%',
                        items       : [
                            {
                                xtype       : 'fieldcontainer',
                                layout      : 'hbox',
                                items       : [
                                     {
                                        xtype       : 'textfield',
                                        name        : 'no_telp1',
                                        allowBlank  : true,
                                        fieldLabel  : 'Phone',
                                        emptyText   : 'No Handphone 1',
                                        anchor      : '100%',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1
                                    },
                                    {
                                        xtype       : 'textfield',
                                        name        : 'no_telp2',
                                        allowBlank  : true,
                                        emptyText   : 'No Handphone 2',
                                        anchor      : '100%',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype       : 'textareafield',
                        name        : 'alamat',
                        allowBlank  : true,
                        fieldLabel  : 'Address',
                        emptyText   : 'Address',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : {
                            anchor  : '100%'
                        },
                        anchor          : '100%',
                        items       : [
                            {
                                xtype       : 'fieldcontainer',
                                layout      : 'hbox',
                                items       : [
                                    {
                                        fieldLabel      : 'Tgl Lahir',
                                        emptyText       : 'Select Tanggal Lahir',
                                        tooltip         : 'Select Tanggal Lahir',
                                        name            : 'tgl_lahir',
                                        xtype           : 'datefield',
                                        anchor          : '100%',
                                        padding         : '0px 2px 0px 2px',
                                        flex            : 1,
                                    },
                                    {
                                        emptyText       : 'Masukan Tempat Lahir',
                                        tooltip         : 'masukan Tempat Lahir',
                                        name            : 'tmp_lahir',
                                        xtype           : 'textfield',
                                        anchor          : '100%',
                                        padding         : '0px 2px 0px 2px',
                                        flex            : 1,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : {
                            anchor  : '100%'
                        },
                        anchor          : '100%',
                        items       : [
                            {
                                xtype       : 'fieldcontainer',
                                layout      : 'hbox',
                                items       : [
                                    {
                                        emptyText       : 'Kode Pos',
                                        fieldLabel      : 'Kode Pos',
                                        tooltip         : 'kode Pos',
                                        name            : 'zip',
                                        xtype           : 'textfield',
                                        editable        : true,
                                        anchor          : '100%',
                                        flex            : 0.6
                                    },
                                    {
                                        xtype       : 'textfield',
                                        name        : 'email',
                                        vtype       : 'email',
                                        allowBlank  : true,
                                        emptyText   : 'Masukan Email Karyawan',
                                        anchor      : '100%',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        xtype       : 'filefield',
                        fieldLabel  : 'Photo',
                        name        : 'userfile',
                        id          : 'userfile',
                        anchor      : '100%',
                        listeners   : {
                            'afterrender': function(field, value, opts){
                                var me = this;
                                imagem = me.up('form').queryById('imagePreview');


                                //If is multiple file upload
                                field.fileInputEl.dom.multiple = true;
                                
                                //ação de selecionar arquivos
                                field.fileInputEl.dom.onchange = function(){
                                    var filerdr = new FileReader();
                                        input = this;
                                    
                                    filerdr.onload = function(e) {
                                       imagem.setSrc(e.target.result);
                                    }
                                    //Possui todas os arquivos a serem enviados.
                                    filerdr.readAsDataURL(input.files[0]);    
                                }                        
                            }
                        }
                    },
                    {
                        xtype       : 'fieldset',
                        title       : 'Picture',

                        width       : 170,
                        height      : 180,
                        items       : [
                            {
                                xtype   : 'image',
                                itemId  : 'imagePreview',
                                height  : 150,
                                width   : 150
                            }
                        ]
                    } 
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Simpan',
                iconCls : 'icon-save',
                // disabled: createProfileMarketing,
                handler: function() {
                    var form            = this.up('form').getForm();
                    var nama_lengkap    = form.findField('nama_lengkap').getValue();
                    var card_id         = form.findField('card_id').getValue();
                    var no_ktp          = form.findField('no_ktp').getValue();
                    var no_telp1        = form.findField('no_telp1').getValue();
                    var no_telp2        = form.findField('no_telp2').getValue();
                    var alamat          = form.findField('alamat').getValue();
                    var tgl_lahir       = form.findField('tgl_lahir').getValue();
                    var tmp_lahir       = form.findField('tmp_lahir').getValue();
                    var zip             = form.findField('zip').getValue();
                    var email           = form.findField('email').getValue();
                    var userfile        = form.findField('userfile').getValue();

                    if(form.isValid()){
                        form.submit({
                            url     : BASE_URL + 'profilemarketing/c_profilemarketing/saveProfileMarketing',
                            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
                            method  : 'POST',
                            params  : {
                                nama_lengkap    : nama_lengkap,
                                card_id         : card_id,
                                no_ktp          : no_ktp,
                                no_telp1        : no_telp1,
                                no_telp2        : no_telp2,
                                alamat          : alamat,
                                tgl_lahir       : tgl_lahir,
                                tmp_lahir       : tmp_lahir,
                                zip             : zip,
                                email           : email,
                                userfile        : userfile
                            },
                            waitMsg: 'Please Wait Data is Processing',
                              success : function(response, op){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : Ext.data.JsonReader(op.result.total),
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formprofilemarketing');
                                var grid    = Ext.getCmp('gridprofilemarketing');
                                var pic     = form.queryById('imagePreview');
                                pic.setSrc('');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridprofilemarketing')[0].getStore('BMT.module.Marketing.ProfileMarketing.store.ProfileMarketing').reload();
                            },
                            failure : function(response, op){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : Ext.data.JsonReader(op.result.total),
                                    icon            : Ext.MessageBox.ERROR,
                                    buttons         : Ext.MessageBox.OK
                                });                   
                            }                                   
                        }); 
                    }
                }
            },
            {
                text        : 'Edit',
                iconCls     : 'icon-edit',
                // disabled    : updateProfileMarketing,
                handler     : function(){
                    var form            = this.up('form').getForm();
                    var id              = form.findField('id').getValue();
                    var nama_lengkap    = form.findField('nama_lengkap').getValue();
                    var card_id         = form.findField('card_id').getValue();
                    var no_ktp          = form.findField('no_ktp').getValue();
                    var no_telp1        = form.findField('no_telp1').getValue();
                    var no_telp2        = form.findField('no_telp2').getValue();
                    var alamat          = form.findField('alamat').getValue();
                    var tgl_lahir       = form.findField('tgl_lahir').getValue();
                    var tmp_lahir       = form.findField('tmp_lahir').getValue();
                    var zip             = form.findField('zip').getValue();
                    var email           = form.findField('email').getValue();
                    var userfile        = form.findField('userfile').getValue();
                    Ext.MessageBox.show({
                        title   : 'Konfirmasi',
                        msg     : 'Anda Yakin Merubah Data',
                        buttons : Ext.Msg.YESNO,
                        icon    : Ext.MessageBox.WARNING,
                        width   : 500,
                        fn      : function(btn,evtObj){
                            if(btn == 'yes'){
                                form.submit({
                                    url     : BASE_URL + 'profilemarketing/c_profilemarketing/editProfileMarketing',
                                    headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
                                    method  : 'POST',
                                    params  : {
                                        id              : id,
                                        nama_lengkap    : nama_lengkap,
                                        card_id         : card_id,
                                        no_ktp          : no_ktp,
                                        no_telp1        : no_telp1,
                                        no_telp2        : no_telp2,
                                        alamat          : alamat,
                                        tgl_lahir       : tgl_lahir,
                                        tmp_lahir       : tmp_lahir,
                                        zip             : zip,
                                        email           : email,
                                        userfile        : userfile
                                    },
                                    success : function(response, op){
                                        Ext.MessageBox.show({
                                            title       : 'Informasi',
                                            msg         : Ext.data.JsonReader(op.result.total),
                                            icon        : Ext.MessageBox.INFO,
                                            buttons     : Ext.MessageBox.OK,
                                            fn          : function(btn, gridPanel, selected){
                                                var form    = Ext.getCmp('formprofilemarketing');
                                                var grid    = Ext.getCmp('gridprofilemarketing');
                                                var pic     = form.queryById('imagePreview');
                                                pic.setSrc('');
                                                form.getForm().reset();
                                                grid.getSelectionModel().deselectAll();
                                                var saveButton = form.down('button[text=Save]');
                                                saveButton.setDisabled(false);
 
                                                var updateButton = form.down('button[text=Edit]');
                                                updateButton.setDisabled(true);
                                                Ext.ComponentQuery.query('#gridprofilemarketing')[0].getStore('BMT.module.Marketing.ProfileMarketing.store.ProfileMarketing').reload();
                                            }        
                                        });
                                    },
                                    failure : function(response, op){
                                        Ext.MessageBox.show({
                                            title   : 'Error',
                                            msg     : Ext.data.JsonReader(op.result.total),
                                            icon    : Ext.MessageBox.ERROR,
                                            buttons : Ext.MessageBox.OK,
                                            fn      : function(btn, gridPanel, selected){
                                                var form    = Ext.getCmp('formprofilemarketing');
                                                var grid    = Ext.getCmp('gridprofilemarketing');
                                                var pic     = form.queryById('imagePreview');
                                                pic.setSrc('');
                                                form.getForm().reset();
                                                grid.getSelectionModel().deselectAll();
                                                if(createProfileMarketing == false){
                                                    var saveButton = form.down('button[text=Save]');
                                                    saveButton.setDisabled(false);
                                                }else{
                                                    var saveButton = form.down('button[text=Save]');
                                                    saveButton.setDisabled(true);
                                                }

                                                var updateButton = form.down('button[text=Edit]');
                                                updateButton.setDisabled(true);
                                                Ext.ComponentQuery.query('#gridprofilemarketing')[0].getStore('BMT.module.Marketing.ProfileMarketing.store.ProfileMarketing').reload();
                                            }  
                                        });                   
                                    }
                                });
                            }
                        }
                    });
                }
            },
            {
                text    : 'Reset',
                iconCls : 'icon-refresh',
                action  : 'reset'
            }
        ];
        me.callParent(arguments);
    }  
});