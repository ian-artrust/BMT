Ext.define('BMT.module.Simpanan.SimpananPelajar.store.SimpananPelajar',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananPelajar.model.SimpananPelajar',
	requires 	: ['BMT.module.Simpanan.SimpananPelajar.model.SimpananPelajar'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'simpananpelajar/c_simpananpelajar/getSimpananPelajar'
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