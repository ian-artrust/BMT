Ext.define('BMT.module.GeneralSetup.MasterHR.JobName.view.JobName',{
    extend   : 'Ext.window.Window',
    title    : 'JobName',
    iconCls  : 'icon-jobname',
    alias    : 'widget.JobName',
    id       : 'JobName',
    layout   : 'fit',
    width    : 850,
    height   : 250,
    border   : false,  
    modal    : true, 
    requires : [
        'BMT.module.GeneralSetup.MasterHR.JobName.view.grid.GridJobName',
        'BMT.module.GeneralSetup.MasterHR.JobName.view.form.FormJobName'
    ],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridjobname', flex : 1},
        {xtype   : 'formjobname', flex : 1}         
    ]
});