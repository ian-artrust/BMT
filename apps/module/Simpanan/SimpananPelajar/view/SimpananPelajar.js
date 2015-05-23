Ext.define('BMT.module.Simpanan.SimpananPelajar.view.SimpananPelajar',{
    extend   : 'Ext.window.Window',
    store       : Ext.create('BMT.module.Simpanan.SimpananPelajar.store.SimpananPelajar'),
    title    : 'SimpananPelajar',
    iconCls  : 'icon-simpananpelajar',
    alias    : 'widget.SimpananPelajar',
    id       : 'SimpananPelajar',
    layout   : 'fit',
    width    : 1100,
    height   : 500,
    frame    : true,
    modal    : true,   
    requires : [
        'BMT.module.Simpanan.SimpananPelajar.view.grid.GridSimpananPelajar',
        'BMT.module.Simpanan.SimpananPelajar.view.TrsPelajar'
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
        {xtype   : 'gridsimpananpelajar', flex : 1},
        {xtype   : 'trspelajar', flex : 1}          
    ]
});