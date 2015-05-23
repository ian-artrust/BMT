Ext.define('BMT.module.Marketing.NasabahHandle.view.NasabahHandle',{
    extend   : 'Ext.window.Window',
    // store       : Ext.create('BMT.module.Marketing.NasabahHandle.store.NasabahHandle'),
    title    : 'NasabahHandle',
    iconCls  : 'icon-nasabahhandle',
    alias    : 'widget.NasabahHandle',
    id       : 'NasabahHandle',
    layout   : 'fit',
    width    : 1100,
    height   : 500,
    frame    : true,
    modal    : true,   
    requires : [
        'BMT.module.Marketing.NasabahHandle.view.grid.GridNasabahHandle',
        'BMT.module.Marketing.NasabahHandle.view.TrsNasabahHandle'
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
        {xtype   : 'gridnasabahhandle', flex : 1},
        {xtype   : 'gridtrsnasabahhandle', flex  :1}       
    ]
});