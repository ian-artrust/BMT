Ext.define('BMT.module.Modal.SimpananPemupukan.SimpananPemupukan.view.grid.GridSimpananPemupukan',{
	extend 		: 'Ext.grid.Panel',
	// store 		: Ext.create('BMT.module.Modal.SimpananPemupukan.store.SimpananPemupukan'),
	alias 		: 'widget.gridsimpananpemupukan',
	id 			: 'gridsimpananpemupukan',
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
        // store       : Ext.create('BMT.module.Modal.SimpananPemupukan.store.SimpananPemupukan'),
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
            text     : 'Code',
            dataIndex: 'code_simpananpemupukan',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete' }, //abled : deleteSimpananPemupukan },
         // { xtype: 'button', iconCls: 'icon-excel', text: 'Print', action : 'print' },
         {
            xtype               : 'textfield',
            emptyText           : 'Type a keyword Press Enter',
            width               : '80%',
            enableKeyEvents     : true,
            action              : 'search'
        }
    ]	
});