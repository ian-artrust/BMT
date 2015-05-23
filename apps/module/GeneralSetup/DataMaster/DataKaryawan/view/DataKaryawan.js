Ext.define('BMT.module.GeneralSetup.DataMaster.DataKaryawan.view.DataKaryawan',{
    extend   : 'Ext.window.Window',
    title    : 'DataKaryawan',
    iconCls  : 'icon-staff',
    alias    : 'widget.DataKaryawan',
    id       : 'DataKaryawan',
    layout   : 'fit',
    width    : 1000,
    height   : 550,
    border   : false,  
    modal    : true, 
    requires : [
        'BMT.module.GeneralSetup.DataMaster.DataKaryawan.view.grid.GridDataKaryawan',
        'BMT.module.GeneralSetup.DataMaster.DataKaryawan.view.form.FormDataKaryawan'
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
        {xtype   : 'griddatakaryawan', flex : 0.8},
        {xtype   : 'formdatakaryawan', flex : 1.2}         
    ]
});