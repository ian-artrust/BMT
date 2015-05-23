Ext.define('BMT.module.GeneralSetup.MasterHR.JobLevel.view.form.FormJobLevel', {
    extend      : 'Ext.form.Panel',
    // store       : Ext.create('SMS.module.MasterData.JobLevel.store.JobLevel'),
    // requires    : ['SMS.module.MasterData.JobLevel.store.JobLevel'],
    alias       : 'widget.formjoblevel',
    id          : 'formjoblevel',
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
                        name        : 'name_joblevel',
                        allowBlank  : true,
                        fieldLabel  : 'Job Level Name',
                        emptyText   : 'Job Level Name',
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
                iconCls : 'icon-save',
                action  : 'save'
            },
            {
                text        : 'Edit',
                iconCls     : 'icon-edit',
                action      : 'update'
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