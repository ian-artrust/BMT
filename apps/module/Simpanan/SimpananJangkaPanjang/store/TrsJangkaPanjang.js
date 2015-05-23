Ext.define('BMT.module.Simpanan.SimpananJangkaPanjang.store.TrsJangkaPanjang',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananJangkaPanjang.model.SimpananJangkaPanjang',
	requires 	: ['BMT.module.Simpanan.SimpananJangkaPanjang.model.SimpananJangkaPanjang'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	storeId 	: 'TrsJangkaPanjang',
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'phonebook/c_phonebook/getTrsJangkaPanjang'
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