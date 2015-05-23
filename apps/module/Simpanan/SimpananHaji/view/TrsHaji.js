Ext.define('BMT.module.Simpanan.SimpananHaji.view.TrsHaji', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.trshaji',
    id       : 'trshaji',
    layout   : 'fit',     
    requires : [
       'BMT.module.Simpanan.SimpananHaji.view.form.FormSimpananHaji',
        'BMT.module.Simpanan.SimpananHaji.view.grid.GridTrsHaji'
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
        {xtype   : 'formsimpananhaji', flex : 0.5},
        {xtype   : 'gridtrshaji', flex : 1.5},         
    ]
});