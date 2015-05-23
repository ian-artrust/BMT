Ext.define('BMT.module.Simpanan.SimpananPelajar.store.TrsPelajar',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananPelajar.model.SimpananPelajar',
	requires 	: ['BMT.module.Simpanan.SimpananPelajar.model.SimpananPelajar'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	storeId 	: 'TrsPelajar',
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'phonebook/c_phonebook/getTrsPelajar'
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