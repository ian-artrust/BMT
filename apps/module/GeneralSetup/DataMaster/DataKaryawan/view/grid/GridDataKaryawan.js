Ext.define('BMT.module.GeneralSetup.DataMaster.DataKaryawan.view.grid.GridDataKaryawan',{
	extend 		: 'Ext.grid.Panel',
	store 		: Ext.create('BMT.module.GeneralSetup.DataMaster.DataKaryawan.store.DataKaryawan'),
	alias 		: 'widget.griddatakaryawan',
	id 			: 'griddatakaryawan',
	border   	: false,
    frame    	: true,
    margins     : '3px', 
    selModel: {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : Ext.create('BMT.module.GeneralSetup.DataMaster.DataKaryawan.store.DataKaryawan'),
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '7%'
        },
        {
            text     : 'Nama',
            dataIndex: 'nama_lengkap',
            width    : '40%'
        },
        {
            text     : 'NIK',
            dataIndex: 'nik',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete' }, 
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '80%',
            enableKeyEvents     : true,
            action              : 'search'
        }
    ]	
});