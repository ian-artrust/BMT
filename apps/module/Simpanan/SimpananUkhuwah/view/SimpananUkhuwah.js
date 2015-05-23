Ext.define('BMT.module.Simpanan.SimpananUkhuwah.view.SimpananUkhuwah',{
    extend   : 'Ext.window.Window',
    store       : Ext.create('BMT.module.Simpanan.SimpananUkhuwah.store.SimpananUkhuwah'),
    title    : 'SimpananUkhuwah',
    iconCls  : 'icon-simpananukhuwah',
    alias    : 'widget.SimpananUkhuwah',
    id       : 'SimpananUkhuwah',
    layout   : 'fit',
    width    : 1100,
    height   : 500,
    frame    : true,
    modal    : true,   
    requires : [
        'BMT.module.Simpanan.SimpananUkhuwah.view.grid.GridSimpananUkhuwah',
        'BMT.module.Simpanan.SimpananUkhuwah.view.TrsUkhuwah'
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
        {xtype   : 'gridsimpananukhuwah', flex : 1},
        {xtype   : 'trsukhuwah', flex : 1}          
    ]
});