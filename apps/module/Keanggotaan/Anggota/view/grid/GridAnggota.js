Ext.define('BMT.module.Keanggotaan.Anggota.view.grid.GridAnggota',{
	extend 		: 'Ext.grid.Panel',
	store 		: Ext.create('BMT.module.Keanggotaan.Anggota.store.Anggota'),
	alias 		: 'widget.gridanggota',
	id 			: 'gridanggota',
	border   	: false,
    frame    	: true,
    margins     : '3px', 
    selModel: {
        selType     : 'checkboxmodel',
        mode        : 'MULTI',
        checkOnly   : true,
        width       : '3%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : Ext.create('BMT.module.Keanggotaan.Anggota.store.Anggota'),
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'Nama',
            dataIndex: 'nama_lengkap',
            width    : '40%'
        },
        {
            text     : 'Code',
            dataIndex: 'code_anggota',
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