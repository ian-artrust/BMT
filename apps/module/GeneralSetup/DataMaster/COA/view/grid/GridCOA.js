Ext.define('BMT.module.GeneralSetup.DataMaster.COA.view.grid.GridCOA',{
	extend 		: 'Ext.grid.Panel',
	// store 		: Ext.create('BMT.module.MasterData.COA.store.COA'),
	alias 		: 'widget.gridcoa',
	id 			: 'gridcoa',
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
        // store       : Ext.create('BMT.module.MasterData.COA.store.COA'),
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '7%'
        },
        {
            text     : 'Account',
            dataIndex: 'account',
            width    : '40%'
        },
        {
            text     : 'Nama Account',
            dataIndex: 'nama_account',
            width    : '40%'
        }
    ],
    tbar: [
         { xtype: 'button', iconCls: 'icon-delete', text: 'Delete', action : 'delete' }, //abled : deleteCOA },
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