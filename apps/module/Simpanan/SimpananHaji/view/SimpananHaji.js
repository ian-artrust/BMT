Ext.define('BMT.module.Simpanan.SimpananHaji.view.SimpananHaji',{
    extend   : 'Ext.window.Window',
    store       : Ext.create('BMT.module.Simpanan.SimpananHaji.store.SimpananHaji'),
    title    : 'SimpananHaji',
    iconCls  : 'icon-simpananhaji',
    alias    : 'widget.SimpananHaji',
    id       : 'SimpananHaji',
    layout   : 'fit',
    width    : 1100,
    height   : 500,
    frame    : true,
    modal    : true,   
    requires : [
        'BMT.module.Simpanan.SimpananHaji.view.grid.GridSimpananHaji',
        'BMT.module.Simpanan.SimpananHaji.view.TrsHaji'
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
        {xtype   : 'gridsimpananhaji', flex : 1},
        {xtype   : 'trshaji', flex : 1}          
    ]
});