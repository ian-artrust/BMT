Ext.define('BMT.module.GeneralSetup.DataMaster.DataUser.view.DataUser',{
    extend   : 'Ext.window.Window',
    title    : 'DataUser',
    iconCls  : 'icon-role2',
    alias    : 'widget.DataUser',
    id       : 'DataUser',
    layout   : 'fit',
    width    : 850,
    height   : 250,
    border   : false,  
    modal    : true, 
    requires : [
        'BMT.module.GeneralSetup.DataMaster.DataUser.view.grid.GridDataUser',
        'BMT.module.GeneralSetup.DataMaster.DataUser.view.form.FormDataUser'
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
        {xtype   : 'griddatauser', flex : 1},
        {xtype   : 'formdatauser', flex : 1}         
    ]
});