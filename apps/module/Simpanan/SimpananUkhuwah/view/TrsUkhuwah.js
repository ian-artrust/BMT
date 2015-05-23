Ext.define('BMT.module.Simpanan.SimpananUkhuwah.view.TrsUkhuwah', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.trsukhuwah',
    id       : 'trsukhuwah',
    layout   : 'fit',     
    requires : [
       'BMT.module.Simpanan.SimpananUkhuwah.view.form.FormSimpananUkhuwah',
        'BMT.module.Simpanan.SimpananUkhuwah.view.grid.GridTrsUkhuwah'
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
        {xtype   : 'formsimpananukhuwah', flex : 0.5},
        {xtype   : 'gridtrsukhuwah', flex : 1.5},         
    ]
});