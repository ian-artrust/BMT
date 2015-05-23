Ext.define('BMT.module.Simpanan.SimpananHaji.store.SimpananHaji',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananHaji.model.SimpananHaji',
	requires 	: ['BMT.module.Simpanan.SimpananHaji.model.SimpananHaji'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'simpananhaji/c_simpananhaji/getSimpananHaji'
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