Ext.define('BMT.module.Keanggotaan.Anggota.view.Anggota',{
    extend   : 'Ext.window.Window',
    title    : 'Anggota',
    iconCls  : 'icon-anggota',
    alias    : 'widget.Anggota',
    id       : 'Anggota',
    layout   : 'fit',
    width    : 1000,
    height   : 550,
    border   : false,  
    modal    : true, 
    requires : [
        'BMT.module.Keanggotaan.Anggota.view.grid.GridAnggota',
        'BMT.module.Keanggotaan.Anggota.view.form.FormAnggota'
    ],
    layout      : {
        type    :'hbox',
        align   :'stretch'
    },
    defaults    : {
        flex    : 1
    },    
    closable    : true,
    items       : [ 
        {xtype   : 'gridanggota', flex : 0.6},
        {xtype   : 'formanggota', flex : 1.4}         
    ]
});