Ext.define('BMT.module.Marketing.NasabahHandle.store.NasabahHandle',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Marketing.NasabahHandle.model.NasabahHandle',
	requires 	: ['BMT.module.Marketing.NasabahHandle.model.NasabahHandle'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'simpananaqiqoh/c_simpananaqiqoh/getNasabahHandle'
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