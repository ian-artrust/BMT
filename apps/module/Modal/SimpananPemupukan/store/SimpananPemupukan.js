Ext.define('BMT.module.Modal.SimpananPemupukan.store.SimpananPemupukan.',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Modal.SimpananPemupukan.model.SimpananPemupukan.',
	requires 	: ['BMT.module.Modal.SimpananPemupukan.model.SimpananPemupukan.'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'simpananpemupukan./c_simpananpemupukan./getSimpananPemupukan.'
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