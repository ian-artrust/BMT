Ext.define('BMT.module.Simpanan.SimpananPelajar.view.TrsPelajar', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.trspelajar',
    id       : 'trspelajar',
    layout   : 'fit',     
    requires : [
       'BMT.module.Simpanan.SimpananPelajar.view.form.FormSimpananPelajar',
        'BMT.module.Simpanan.SimpananPelajar.view.grid.GridTrsPelajar'
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
        {xtype   : 'formsimpananpelajar', flex : 0.5},
        {xtype   : 'gridtrspelajar', flex : 1.5},         
    ]
});