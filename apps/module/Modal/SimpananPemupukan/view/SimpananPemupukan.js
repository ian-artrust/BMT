Ext.define('BMT.module.Modal.SimpananPemupukan.view.SimpananPemupukan',{
    extend   : 'Ext.window.Window',
    title    : 'SimpananPemupukan',
    iconCls  : 'icon-simpemupukan',
    alias    : 'widget.SimpananPemupukan',
    id       : 'SimpananPemupukan',
    layout   : 'fit',
    width    : 850,
    height   : 250,
    border   : false,  
    modal    : true, 
    requires : [
        'BMT.module.Modal.SimpananPemupukan.view.grid.GridSimpananPemupukan',
        'BMT.module.Modal.SimpananPemupukan.view.form.FormSimpananPemupukan'
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
        {xtype   : 'gridsimpananpemupukan', flex : 1},
        {xtype   : 'formsimpananpemupukan', flex : 1}         
    ]
});