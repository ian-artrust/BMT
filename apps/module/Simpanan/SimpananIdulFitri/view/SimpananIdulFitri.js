Ext.define('BMT.module.Simpanan.SimpananIdulFitri.view.SimpananIdulFitri',{
    extend   : 'Ext.window.Window',
    store       : Ext.create('BMT.module.Simpanan.SimpananIdulFitri.store.SimpananIdulFitri'),
    title    : 'SimpananIdulFitri',
    iconCls  : 'icon-simpananidulfitri',
    alias    : 'widget.SimpananIdulFitri',
    id       : 'SimpananIdulFitri',
    layout   : 'fit',
    width    : 1100,
    height   : 500,
    frame    : true,
    modal    : true,   
    requires : [
        'BMT.module.Simpanan.SimpananIdulFitri.view.grid.GridSimpananIdulFitri',
        'BMT.module.Simpanan.SimpananIdulFitri.view.TrsIdulFitri'
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
        {xtype   : 'gridsimpananidulfitri', flex : 1},
        {xtype   : 'trsidulfitri', flex : 1}          
    ]
});