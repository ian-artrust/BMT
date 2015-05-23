Ext.define('BMT.module.Simpanan.SimpananBersalin.view.TrsBersalin', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.trsbersalin',
    id       : 'trsbersalin',
    layout   : 'fit',     
    requires : [
       'BMT.module.Simpanan.SimpananBersalin.view.form.FormSimpananBersalin',
        'BMT.module.Simpanan.SimpananBersalin.view.grid.GridTrsBersalin'
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
        {xtype   : 'formsimpananbersalin', flex : 0.5},
        {xtype   : 'gridtrsbersalin', flex : 1.5},         
    ]
});