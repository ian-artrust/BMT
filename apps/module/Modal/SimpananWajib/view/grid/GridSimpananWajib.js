Ext.define('BMT.module.Modal.SimpananWajib.SimpananWajib.view.grid.GridSimpananWajib',{
	extend 		: 'Ext.grid.Panel',
	// store 		: Ext.create('BMT.module.Modal.SimpananWajib.store.SimpananWajib'),
	alias 		: 'widget.gridsimpananwajib',
	id 			: 'gridsimpananwajib',
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
        // store       : Ext.create('BMT.module.Modal.SimpananWajib.store.SimpananWajib'),
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
            dataIndex: 'code_simpananwajib',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete' }, //abled : deleteSimpananWajib },
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