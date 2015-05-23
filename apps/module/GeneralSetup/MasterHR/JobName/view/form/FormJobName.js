Ext.define('BMT.module.GeneralSetup.MasterHR.JobName.view.form.FormJobName', {
    extend      : 'Ext.form.Panel',
    store       : Ext.create('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName'),
    requires    : ['BMT.module.GeneralSetup.MasterHR.JobName.store.JobName'],
    alias       : 'widget.formjobname',
    id          : 'formjobname',
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
                        fieldLabel      : 'Job Level',
                        emptyText       : 'Select Job Level',
                        tooltip         : 'Select Job Level',
                        queryMode       : 'local',
                        name            : 'id_joblevel',
                        xtype           : 'combobox',
                        store           : Ext.create('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel'),
                        displayField    : 'name_joblevel',
                        valueField      : 'id',
                        anchor          : '100%',
                        padding         : '0px 2px 0px 2px'                   
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'jobname',
                        allowBlank  : true,
                        fieldLabel  : 'Job Name',
                        emptyText   : 'Job Name',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px'
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