Ext.define('BMT.module.Simpanan.SimpananUmat.view.SimpananUmat',{
    extend   : 'Ext.window.Window',
    store       : Ext.create('BMT.module.Simpanan.SimpananUmat.store.SimpananUmat'),
    title    : 'SimpananUmat',
    iconCls  : 'icon-simpananumat',
    alias    : 'widget.SimpananUmat',
    id       : 'SimpananUmat',
    layout   : 'fit',
    width    : 1100,
    height   : 500,
    frame    : true,
    modal    : true,   
    requires : [
        'BMT.module.Simpanan.SimpananUmat.view.grid.GridSimpananUmat',
        'BMT.module.Simpanan.SimpananUmat.view.TrsUmat'
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
        {xtype   : 'gridsimpananumat', flex : 1},
        {xtype   : 'trsumat', flex : 1}          
    ]
});