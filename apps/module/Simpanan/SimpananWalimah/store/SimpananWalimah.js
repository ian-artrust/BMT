Ext.define('BMT.module.Simpanan.SimpananWalimah.store.SimpananWalimah',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananWalimah.model.SimpananWalimah',
	requires 	: ['BMT.module.Simpanan.SimpananWalimah.model.SimpananWalimah'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'simpananwalimah/c_simpananwalimah/getSimpananWalimah'
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