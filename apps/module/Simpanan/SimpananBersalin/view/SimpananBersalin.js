Ext.define('BMT.module.Simpanan.SimpananBersalin.view.SimpananBersalin',{
    extend   : 'Ext.window.Window',
    store       : Ext.create('BMT.module.Simpanan.SimpananBersalin.store.SimpananBersalin'),
    title    : 'SimpananBersalin',
    iconCls  : 'icon-simpananbersalin',
    alias    : 'widget.SimpananBersalin',
    id       : 'SimpananBersalin',
    layout   : 'fit',
    width    : 1100,
    height   : 500,
    frame    : true,
    modal    : true,   
    requires : [
        'BMT.module.Simpanan.SimpananBersalin.view.grid.GridSimpananBersalin',
        'BMT.module.Simpanan.SimpananBersalin.view.TrsBersalin'
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
        {xtype   : 'gridsimpananbersalin', flex : 1},
        {xtype   : 'trsbersalin', flex : 1}          
    ]
});