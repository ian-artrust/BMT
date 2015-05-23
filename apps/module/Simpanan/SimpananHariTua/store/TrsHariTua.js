Ext.define('BMT.module.Simpanan.SimpananHariTua.store.TrsHariTua',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananHariTua.model.SimpananHariTua',
	requires 	: ['BMT.module.Simpanan.SimpananHariTua.model.SimpananHariTua'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	storeId 	: 'TrsHariTua',
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'phonebook/c_phonebook/getTrsHariTua'
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