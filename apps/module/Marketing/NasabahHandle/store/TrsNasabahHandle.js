Ext.define('BMT.module.Marketing.NasabahHandle.store.TrsNasabahHandle',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Marketing.NasabahHandle.model.NasabahHandle',
	requires 	: ['BMT.module.Marketing.NasabahHandle.model.NasabahHandle'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	storeId 	: 'TrsNasabahHandle',
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'phonebook/c_phonebook/getTrsNasabahHandle'
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