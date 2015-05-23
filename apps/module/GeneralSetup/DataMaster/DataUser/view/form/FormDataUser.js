Ext.define('BMT.module.GeneralSetup.DataMaster.DataUser.view.form.FormDataUser', {
    extend      : 'Ext.form.Panel',
    // store       : Ext.create('SMS.module.MasterData.DataUser.store.DataUser'),
    // requires    : ['SMS.module.MasterData.DataUser.store.DataUser'],
    alias       : 'widget.formdatauser',
    id          : 'formdatauser',
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
                                    readonly    : true,
                                    flex        : 1
                                },
                                {
                                    fieldLabel  : 'Aktif',
                                    tooltip     : 'Is Active?',
                                    xtype       : 'checkboxfield',
                                    name        : 'isactive',
                                    checked     : false,
                                    labelWidth  : 35,
                                    padding     : '0px 2px 5px 2px',
                                }
                            ]
                        }]
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'username',
                        allowBlank  : true,
                        fieldLabel  : 'Username',
                        emptyText   : 'Username',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        flex        : 1
                    },
                    {
                        xtype       : 'textfield',
                        vtype       : 'password',
                        name        : 'password',
                        allowBlank  : true,
                        fieldLabel  : 'Password',
                        emptyText   : 'Password',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        flex        : 1
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
                                        fieldLabel      : 'Role User',
                                        emptyText       : 'Select Role User',
                                        tooltip         : 'Select Role User',
                                        queryMode       : 'local',
                                        name            : 'level',
                                        xtype           : 'combobox',
                                        // store           : Ext.create('SMS.module.MasterData.Kecamatan.store.Kecamatan'),
                                        displayField    : 'name',
                                        valueField      : 'id',
                                        anchor          : '100%',
                                        padding         : '0px 2px 0px 2px',
                                        flex            : 1,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text        : 'Edit',
                iconCls     : 'icon-edit',
                action      : 'update'
            },
            {
                text        : 'Reset',
                iconCls     : 'icon-refresh',
                action      : 'reset'
            }
        ];
        me.callParent(arguments);
    }  
});