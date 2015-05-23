Ext.define('BMT.module.Marketing.ProfileMarketing.view.ProfileMarketing',{
    extend   : 'Ext.window.Window',
    title    : 'ProfileMarketing',
    iconCls  : 'icon-staff',
    alias    : 'widget.ProfileMarketing',
    id       : 'ProfileMarketing',
    layout   : 'fit',
    width    : 1000,
    height   : 550,
    border   : false,  
    modal    : true, 
    requires : [
        'BMT.module.Marketing.ProfileMarketing.view.grid.GridProfileMarketing',
        'BMT.module.Marketing.ProfileMarketing.view.form.FormProfileMarketing'
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
        {xtype   : 'gridprofilemarketing', flex : 0.8},
        {xtype   : 'formprofilemarketing', flex : 1.2}         
    ]
});