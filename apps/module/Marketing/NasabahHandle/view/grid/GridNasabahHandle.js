Ext.define('BMT.module.Marketing.NasabahHandle.view.grid.GridNasabahHandle',{
	extend 		: 'Ext.grid.Panel',
	// store 		: Ext.create('BMT.module.Marketing.NasabahHandle.store.NasabahHandle'),
	alias 		: 'widget.gridnasabahhandle',
	id 			: 'gridnasabahhandle',
	border   	: false,
    frame    	: true,
    margins     : '3px', 
        selModel: {
        selType     : 'checkboxmodel',
        mode        : 'SINGLE',
        checkOnly   : true,
        width       : '5%',
        action      : 'selected',
    },
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        // store       : Ext.create('BMT.module.Marketing.NasabahHandle.store.NasabahHandle'),
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '7%'
        },
        {
            text    : 'ID Uniqe',
            dataIndex: 'id',
            width   : '7%',
            hidden  : true
        },
        {
            text     : 'Code Anggota',
            dataIndex: 'code_anggota',
            width    : '20%'
        },
        {
            text     : 'Nama',
            dataIndex: 'nama_lengkap',
            width    : '30%'
        },
        {
            text     : 'Kesatuan',
            dataIndex: 'name_kesatuan',
            width    : '30%'
        }
    ],
    tbar: [
         //{ xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete', disabled : deleteNasabahHandle },
         // { xtype: 'button', iconCls: 'icon-excel', text: 'Print', action : 'print' },
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '98%',
            enableKeyEvents     : true,
            action              : 'search'
        }
    ]	
});