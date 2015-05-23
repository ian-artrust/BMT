Ext.define('BMT.module.Simpanan.SimpananQurban.view.TrsQurban', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.trsqurban',
    id       : 'trsqurban',
    layout   : 'fit',     
    requires : [
       'BMT.module.Simpanan.SimpananQurban.view.form.FormSimpananQurban',
        'BMT.module.Simpanan.SimpananQurban.view.grid.GridTrsQurban'
    ],
    layout      : {
        type    :'vbox',
        align   :'stretch',
        border  : false
    },
    defaults    : {
        flex    : 1
    },    
    items       : [ 
        {xtype   : 'formsimpananqurban', flex : 0.5},
        {xtype   : 'gridtrsqurban', flex : 1.5},         
    ]
});