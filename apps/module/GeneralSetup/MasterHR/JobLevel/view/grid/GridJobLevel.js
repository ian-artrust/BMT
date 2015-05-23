Ext.define('BMT.module.GeneralSetup.MasterHR.JobLevel.view.grid.GridJobLevel',{
	extend 		: 'Ext.grid.Panel',
	store 		: Ext.create('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel'),
	alias 		: 'widget.gridjoblevel',
	id 			: 'gridjoblevel',
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
        store       : Ext.create('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel'),
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
            dataIndex: 'name_joblevel',
            width    : '70%'
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