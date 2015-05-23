Ext.define('BMT.module.Simpanan.SimpananIdulFitri.view.TrsIdulFitri', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.trsidulfitri',
    id       : 'trsidulfitri',
    layout   : 'fit',     
    requires : [
       'BMT.module.Simpanan.SimpananIdulFitri.view.form.FormSimpananIdulFitri',
        'BMT.module.Simpanan.SimpananIdulFitri.view.grid.GridTrsIdulFitri'
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
        {xtype   : 'formsimpananidulfitri', flex : 0.5},
        {xtype   : 'gridtrsidulfitri', flex : 1.5},         
    ]
});