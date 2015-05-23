Ext.define('BMT.module.Simpanan.SimpananAqiqoh.view.TrsAqiqoh', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.trsaqiqoh',
    id       : 'trsaqiqoh',
    layout   : 'fit',     
    requires : [
       'BMT.module.Simpanan.SimpananAqiqoh.view.form.FormSimpananAqiqoh',
        'BMT.module.Simpanan.SimpananAqiqoh.view.grid.GridTrsAqiqoh'
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
        {xtype   : 'formsimpananaqiqoh', flex : 0.5},
        {xtype   : 'gridtrsaqiqoh', flex : 1.5},         
    ]
});