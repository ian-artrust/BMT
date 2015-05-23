Ext.define('BMT.module.GeneralSetup.DataMaster.COA.view.form.FormCOA', {
    extend      : 'Ext.form.Panel',
    // store       : Ext.create('SMS.module.MasterData.COA.store.COA'),
    // requires    : ['SMS.module.MasterData.COA.store.COA'],
    alias       : 'widget.formcoa',
    id          : 'formcoa',
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
                        xtype       : 'textfield',
                        name        : 'account',
                        allowBlank  : true,
                        fieldLabel  : 'Account',
                        emptyText   : 'Account',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        flex        : 1
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'nama_account',
                        allowBlank  : true,
                        fieldLabel  : 'Nama Account',
                        emptyText   : 'Nama Account',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        flex        : 1
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Simpan',
                iconCls : 'icon-save'
            },
            {
                text        : 'Edit',
                iconCls     : 'icon-edit'
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