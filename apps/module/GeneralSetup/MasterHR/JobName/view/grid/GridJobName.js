Ext.define('BMT.module.GeneralSetup.MasterHR.JobName.view.grid.GridJobName',{
	extend 		: 'Ext.grid.Panel',
	store 		: Ext.create('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName'),
	alias 		: 'widget.gridjobname',
	id 			: 'gridjobname',
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
        store       : Ext.create('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName'),
        dock        : 'bottom'
    }], 
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '7%'
        },
        {
            text     : 'Job Level',
            dataIndex: 'name_joblevel',
            width    : '40%'
        },
        {
            text     : 'Job Name',
            dataIndex: 'jobname',
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