Ext.define('BMT.module.Modal.SimpananPokok.view.SimpananPokok',{
    extend   : 'Ext.window.Window',
    title    : 'SimpananPokok',
    iconCls  : 'icon-simpokok',
    alias    : 'widget.SimpananPokok',
    id       : 'SimpananPokok',
    layout   : 'fit',
    width    : 850,
    height   : 250,
    border   : false,  
    modal    : true, 
    requires : [
        'BMT.module.Modal.SimpananPokok.view.grid.GridSimpananPokok',
        'BMT.module.Modal.SimpananPokok.view.form.FormSimpananPokok'
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
        {xtype   : 'gridsimpananpokok', flex : 1},
        {xtype   : 'formsimpananpokok', flex : 1}         
    ]
});