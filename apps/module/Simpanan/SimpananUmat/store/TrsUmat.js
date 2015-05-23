Ext.define('BMT.module.Simpanan.SimpananUmat.store.TrsUmat',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananUmat.model.TrsUmat',
	requires 	: ['BMT.module.Simpanan.SimpananUmat.model.TrsUmat'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	storeId 	: 'TrsUmat',
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'phonebook/c_phonebook/getTrsUmat'
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