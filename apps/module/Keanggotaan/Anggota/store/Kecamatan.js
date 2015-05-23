Ext.define('BMT.module.Keanggotaan.Anggota.store.Kecamatan',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Keanggotaan.Anggota.model.Kecamatan',
	requires 	: ['BMT.module.Keanggotaan.Anggota.model.Kecamatan'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'anggota/c_anggota/getKecamatan'
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