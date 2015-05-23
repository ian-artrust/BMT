Ext.define('BMT.module.GeneralSetup.MasterHR.JobLevel.view.JobLevel',{
    extend   : 'Ext.window.Window',
    title    : 'JobLevel',
    iconCls  : 'icon-joblevel',
    alias    : 'widget.JobLevel',
    id       : 'JobLevel',
    layout   : 'fit',
    width    : 850,
    height   : 250,
    border   : false,  
    modal    : true, 
    requires : [
        'BMT.module.GeneralSetup.MasterHR.JobLevel.view.grid.GridJobLevel',
        'BMT.module.GeneralSetup.MasterHR.JobLevel.view.form.FormJobLevel'
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
        {xtype   : 'gridjoblevel', flex : 1},
        {xtype   : 'formjoblevel', flex : 1}         
    ]
});