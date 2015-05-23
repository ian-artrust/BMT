Ext.define('BMT.module.Simpanan.SimpananUmat.store.SimpananUmat',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananUmat.model.SimpananUmat',
	requires 	: ['BMT.module.Simpanan.SimpananUmat.model.SimpananUmat'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'simpananumat/c_simpananumat/getSimpananUmat'
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