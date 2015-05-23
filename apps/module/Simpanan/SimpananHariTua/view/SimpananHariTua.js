Ext.define('BMT.module.Simpanan.SimpananHariTua.view.SimpananHariTua',{
    extend   : 'Ext.window.Window',
    store       : Ext.create('BMT.module.Simpanan.SimpananHariTua.store.SimpananHariTua'),
    title    : 'SimpananHariTua',
    iconCls  : 'icon-simpananharitua',
    alias    : 'widget.SimpananHariTua',
    id       : 'SimpananHariTua',
    layout   : 'fit',
    width    : 1100,
    height   : 500,
    frame    : true,
    modal    : true,   
    requires : [
        'BMT.module.Simpanan.SimpananHariTua.view.grid.GridSimpananHariTua',
        'BMT.module.Simpanan.SimpananHariTua.view.TrsHariTua'
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
        {xtype   : 'gridsimpananharitua', flex : 1},
        {xtype   : 'trsharitua', flex : 1}          
    ]
});