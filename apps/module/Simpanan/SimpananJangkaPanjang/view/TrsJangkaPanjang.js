Ext.define('BMT.module.Simpanan.SimpananJangkaPanjang.view.TrsJangkaPanjang', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.trsjangkapanjang',
    id       : 'trsjangkapanjang',
    layout   : 'fit',     
    requires : [
       'BMT.module.Simpanan.SimpananJangkaPanjang.view.form.FormSimpananJangkaPanjang',
        'BMT.module.Simpanan.SimpananJangkaPanjang.view.grid.GridTrsJangkaPanjang'
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
        {xtype   : 'formsimpananjangkapanjang', flex : 0.5},
        {xtype   : 'gridtrsjangkapanjang', flex : 1.5},         
    ]
});