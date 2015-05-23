Ext.define('BMT.module.Modal.SimpananWajib.view.SimpananWajib',{
    extend   : 'Ext.window.Window',
    title    : 'SimpananWajib',
    iconCls  : 'icon-simwajib',
    alias    : 'widget.SimpananWajib',
    id       : 'SimpananWajib',
    layout   : 'fit',
    width    : 850,
    height   : 250,
    border   : false,  
    modal    : true, 
    requires : [
        'BMT.module.Modal.SimpananWajib.view.grid.GridSimpananWajib',
        'BMT.module.Modal.SimpananWajib.view.form.FormSimpananWajib'
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
        {xtype   : 'gridsimpananwajib', flex : 1},
        {xtype   : 'formsimpananwajib', flex : 1}         
    ]
});