Ext.define('BMT.module.Modal.SimpananPokok.store.SimpananPokok.',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Modal.SimpananPokok.model.SimpananPokok.',
	requires 	: ['BMT.module.Modal.SimpananPokok.model.SimpananPokok.'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'simpananpokok./c_simpananpokok./getSimpananPokok.'
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