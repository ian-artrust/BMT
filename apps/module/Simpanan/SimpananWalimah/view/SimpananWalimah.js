Ext.define('BMT.module.Simpanan.SimpananWalimah.view.SimpananWalimah',{
    extend   : 'Ext.window.Window',
    store       : Ext.create('BMT.module.Simpanan.SimpananWalimah.store.SimpananWalimah'),
    title    : 'SimpananWalimah',
    iconCls  : 'icon-simpananwalimah',
    alias    : 'widget.SimpananWalimah',
    id       : 'SimpananWalimah',
    layout   : 'fit',
    width    : 1100,
    height   : 500,
    frame    : true,
    modal    : true,   
    requires : [
        'BMT.module.Simpanan.SimpananWalimah.view.grid.GridSimpananWalimah',
        'BMT.module.Simpanan.SimpananWalimah.view.TrsWalimah'
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
        {xtype   : 'gridsimpananwalimah', flex : 1},
        {xtype   : 'trswalimah', flex : 1}          
    ]
});