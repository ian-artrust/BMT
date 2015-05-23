Ext.define('BMT.module.Simpanan.SimpananUkhuwah.store.SimpananUkhuwah',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananUkhuwah.model.SimpananUkhuwah',
	requires 	: ['BMT.module.Simpanan.SimpananUkhuwah.model.SimpananUkhuwah'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'simpananukhuwah/c_simpananukhuwah/getSimpananUkhuwah'
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