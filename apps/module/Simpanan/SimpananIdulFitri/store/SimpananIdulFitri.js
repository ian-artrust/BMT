Ext.define('BMT.module.Simpanan.SimpananIdulFitri.store.SimpananIdulFitri',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananIdulFitri.model.SimpananIdulFitri',
	requires 	: ['BMT.module.Simpanan.SimpananIdulFitri.model.SimpananIdulFitri'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'simpananidulfitri/c_simpananidulfitri/getSimpananIdulFitri'
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