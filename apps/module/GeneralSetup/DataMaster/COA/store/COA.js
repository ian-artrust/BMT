Ext.define('BMT.module.GeneralSetup.DataMaster.COA.store.COA',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.GeneralSetup.DataMaster.COA.model.COA',
	requires 	: ['BMT.module.GeneralSetup.DataMaster.COA.model.COA'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'coa/c_coa/getCOA'
		},
		actionMethods	: {
			read 	: 'POST'
		},
		 reader          : {
            type            : 'json',
            root            : 'data',
            successProperty : 'success',
            totalProperty   : 'total'
        },
        writer          : {
            type            : 'json',
            writeAllFields  : true,
            root            : 'data',
            encode          : true
        }
	}
});