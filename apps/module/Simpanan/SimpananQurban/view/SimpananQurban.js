Ext.define('BMT.module.Simpanan.SimpananQurban.view.SimpananQurban',{
    extend   : 'Ext.window.Window',
    store       : Ext.create('BMT.module.Simpanan.SimpananQurban.store.SimpananQurban'),
    title    : 'SimpananQurban',
    iconCls  : 'icon-simpananqurban',
    alias    : 'widget.SimpananQurban',
    id       : 'SimpananQurban',
    layout   : 'fit',
    width    : 1100,
    height   : 500,
    frame    : true,
    modal    : true,   
    requires : [
        'BMT.module.Simpanan.SimpananQurban.view.grid.GridSimpananQurban',
        'BMT.module.Simpanan.SimpananQurban.view.TrsQurban'
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
        {xtype   : 'gridsimpananqurban', flex : 1},
        {xtype   : 'trsqurban', flex : 1}          
    ]
});