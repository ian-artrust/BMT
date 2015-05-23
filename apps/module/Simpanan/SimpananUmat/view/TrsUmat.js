Ext.define('BMT.module.Simpanan.SimpananUmat.view.TrsUmat', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.trsumat',
    id       : 'trsumat',
    layout   : 'fit',     
    requires : [
       'BMT.module.Simpanan.SimpananUmat.view.form.FormSimpananUmat',
        'BMT.module.Simpanan.SimpananUmat.view.grid.GridTrsUmat'
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
        {xtype   : 'formsimpananumat', flex : 0.5},
        {xtype   : 'gridtrsumat', flex : 1.5},         
    ]
});