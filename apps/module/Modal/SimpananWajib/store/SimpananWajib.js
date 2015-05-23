Ext.define('BMT.module.Modal.SimpananWajib.store.SimpananWajib.',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Modal.SimpananWajib.model.SimpananWajib.',
	requires 	: ['BMT.module.Modal.SimpananWajib.model.SimpananWajib.'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'simpananwajib./c_simpananwajib./getSimpananWajib.'
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