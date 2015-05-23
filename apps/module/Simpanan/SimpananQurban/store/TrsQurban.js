Ext.define('BMT.module.Simpanan.SimpananQurban.store.TrsQurban',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananQurban.model.SimpananQurban',
	requires 	: ['BMT.module.Simpanan.SimpananQurban.model.SimpananQurban'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	storeId 	: 'TrsQurban',
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'phonebook/c_phonebook/getTrsQurban'
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