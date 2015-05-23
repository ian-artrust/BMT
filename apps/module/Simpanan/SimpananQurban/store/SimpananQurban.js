Ext.define('BMT.module.Simpanan.SimpananQurban.store.SimpananQurban',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananQurban.model.SimpananQurban',
	requires 	: ['BMT.module.Simpanan.SimpananQurban.model.SimpananQurban'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'simpananqurban/c_simpananqurban/getSimpananQurban'
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