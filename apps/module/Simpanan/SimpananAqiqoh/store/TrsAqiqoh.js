Ext.define('BMT.module.Simpanan.SimpananAqiqoh.store.TrsAqiqoh',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.Simpanan.SimpananAqiqoh.model.SimpananAqiqoh',
	requires 	: ['BMT.module.Simpanan.SimpananAqiqoh.model.SimpananAqiqoh'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	storeId 	: 'TrsAqiqoh',
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'phonebook/c_phonebook/getTrsAqiqoh'
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