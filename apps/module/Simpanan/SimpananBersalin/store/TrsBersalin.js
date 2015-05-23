Ext.define('BMT.module.Simpanan.SimpananBersalin.store.TrsBersalin',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananBersalin.model.SimpananBersalin',
	requires 	: ['BMT.module.Simpanan.SimpananBersalin.model.SimpananBersalin'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	storeId 	: 'TrsBersalin',
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'phonebook/c_phonebook/getTrsBersalin'
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