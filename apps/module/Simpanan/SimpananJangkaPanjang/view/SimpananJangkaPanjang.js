Ext.define('BMT.module.Simpanan.SimpananJangkaPanjang.view.SimpananJangkaPanjang',{
    extend   : 'Ext.window.Window',
    store       : Ext.create('BMT.module.Simpanan.SimpananJangkaPanjang.store.SimpananJangkaPanjang'),
    title    : 'SimpananJangkaPanjang',
    iconCls  : 'icon-simpananjangkapanjang',
    alias    : 'widget.SimpananJangkaPanjang',
    id       : 'SimpananJangkaPanjang',
    layout   : 'fit',
    width    : 1100,
    height   : 500,
    frame    : true,
    modal    : true,   
    requires : [
        'BMT.module.Simpanan.SimpananJangkaPanjang.view.grid.GridSimpananJangkaPanjang',
        'BMT.module.Simpanan.SimpananJangkaPanjang.view.TrsJangkaPanjang'
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
        {xtype   : 'gridsimpananjangkapanjang', flex : 1},
        {xtype   : 'trsjangkapanjang', flex : 1}          
    ]
});