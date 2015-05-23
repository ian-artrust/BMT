Ext.define('BMT.module.Keanggotaan.Anggota.store.Anggota',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Keanggotaan.Anggota.model.Anggota',
	requires 	: ['BMT.module.Keanggotaan.Anggota.model.Anggota'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'anggota/c_anggota/getAnggota'
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