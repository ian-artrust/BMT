Ext.define('BMT.module.Simpanan.SimpananAqiqoh.view.SimpananAqiqoh',{
    extend   : 'Ext.window.Window',
    store       : Ext.create('BMT.module.Simpanan.SimpananAqiqoh.store.SimpananAqiqoh'),
    title    : 'SimpananAqiqoh',
    iconCls  : 'icon-simpananaqiqoh',
    alias    : 'widget.SimpananAqiqoh',
    id       : 'SimpananAqiqoh',
    layout   : 'fit',
    width    : 1100,
    height   : 500,
    frame    : true,
    modal    : true,   
    requires : [
        'BMT.module.Simpanan.SimpananAqiqoh.view.grid.GridSimpananAqiqoh',
        'BMT.module.Simpanan.SimpananAqiqoh.view.TrsAqiqoh'
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
        {xtype   : 'gridsimpananaqiqoh', flex : 1},
        {xtype   : 'trsaqiqoh', flex : 1}          
    ]
});