Ext.define('BMT.module.GeneralSetup.DataMaster.DataUser.store.DataUser',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.GeneralSetup.DataMaster.DataUser.model.DataUser',
	requires 	: ['BMT.module.GeneralSetup.DataMaster.DataUser.model.DataUser'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'datauser/c_datauser/getDataUser'
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