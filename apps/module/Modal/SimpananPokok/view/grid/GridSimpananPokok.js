Ext.define('BMT.module.Modal.SimpananPokok.SimpananPokok.view.grid.GridSimpananPokok',{
	extend 		: 'Ext.grid.Panel',
	// store 		: Ext.create('BMT.module.Modal.SimpananPokok.store.SimpananPokok'),
	alias 		: 'widget.gridsimpananpokok',
	id 			: 'gridsimpananpokok',
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
        // store       : Ext.create('BMT.module.Modal.SimpananPokok.store.SimpananPokok'),
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
            dataIndex: 'no_anggota',
            width    : '40%'
        },
        {
            text     : 'Code',
            dataIndex: 'nama_lengkap',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete' }, //abled : deleteSimpananPokok },
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