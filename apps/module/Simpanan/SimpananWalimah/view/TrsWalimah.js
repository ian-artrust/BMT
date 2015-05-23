Ext.define('BMT.module.Simpanan.SimpananWalimah.view.TrsWalimah', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.trswalimah',
    id       : 'trswalimah',
    layout   : 'fit',     
    requires : [
       'BMT.module.Simpanan.SimpananWalimah.view.form.FormSimpananWalimah',
        'BMT.module.Simpanan.SimpananWalimah.view.grid.GridTrsWalimah'
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
        {xtype   : 'formsimpananwalimah', flex : 0.5},
        {xtype   : 'gridtrswalimah', flex : 1.5},         
    ]
});