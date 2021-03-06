Ext.define('BMT.module.Simpanan.SimpananHaji.store.TrsHaji',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananHaji.model.SimpananHaji',
	requires 	: ['BMT.module.Simpanan.SimpananHaji.model.SimpananHaji'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	storeId 	: 'TrsHaji',
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'phonebook/c_phonebook/getTrsHaji'
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