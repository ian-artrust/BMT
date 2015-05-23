Ext.define('BMT.module.GeneralSetup.MasterHR.JobLevel.store.JobLevel',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.GeneralSetup.MasterHR.JobLevel.model.JobLevel',
	requires 	: ['BMT.module.GeneralSetup.MasterHR.JobLevel.model.JobLevel'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'joblevel/c_joblevel/getJobLevel'
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