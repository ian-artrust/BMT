Ext.define('BMT.module.Marketing.ProfileMarketing.store.ProfileMarketing',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Marketing.ProfileMarketing.model.ProfileMarketing',
	requires 	: ['BMT.module.Marketing.ProfileMarketing.model.ProfileMarketing'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'profilemarketing/c_profilemarketing/getProfileMarketing'
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