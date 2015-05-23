Ext.define('BMT.module.GeneralSetup.DataMaster.COA.view.COA',{
    extend   : 'Ext.window.Window',
    title    : 'COA',
    iconCls  : 'icon-coa',
    alias    : 'widget.COA',
    id       : 'COA',
    layout   : 'fit',
    width    : 850,
    height   : 250,
    border   : false,  
    modal    : true, 
    requires : [
        'BMT.module.GeneralSetup.DataMaster.COA.view.grid.GridCOA',
        'BMT.module.GeneralSetup.DataMaster.COA.view.form.FormCOA'
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
        {xtype   : 'gridcoa', flex : 1},
        {xtype   : 'formcoa', flex : 1}         
    ]
});