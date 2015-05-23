Ext.define('BMT.module.GeneralSetup.MasterHR.JobName.store.JobName',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.GeneralSetup.MasterHR.JobName.model.JobName',
	requires 	: ['BMT.module.GeneralSetup.MasterHR.JobName.model.JobName'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'jobname/c_jobname/getJobName'
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