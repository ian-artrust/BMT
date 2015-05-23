Ext.define('BMT.module.Simpanan.SimpananHariTua.view.TrsHariTua', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.trsharitua',
    id       : 'trsharitua',
    layout   : 'fit',     
    requires : [
       'BMT.module.Simpanan.SimpananHariTua.view.form.FormSimpananHariTua',
        'BMT.module.Simpanan.SimpananHariTua.view.grid.GridTrsHariTua'
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
        {xtype   : 'formsimpananharitua', flex : 0.5},
        {xtype   : 'gridtrsharitua', flex : 1.5},         
    ]
});