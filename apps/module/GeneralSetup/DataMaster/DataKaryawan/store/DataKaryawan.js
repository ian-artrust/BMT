Ext.define('BMT.module.GeneralSetup.DataMaster.DataKaryawan.store.DataKaryawan',{
	extend 		: 'Ext.data.Store',
	model 		: 'BMT.module.GeneralSetup.DataMaster.DataKaryawan.model.DataKaryawan',
	requires 	: ['BMT.module.GeneralSetup.DataMaster.DataKaryawan.model.DataKaryawan'],
	autoLoad 	: true,
	autoSync 	: true,
	pageSize 	: 20,
	root 		: {
		expanded : false
	},
	proxy 		: {
		type 	: 'ajax',
		api 	: {
			read 	: BASE_URL + 'datakaryawan/c_datakaryawan/getDataKaryawan'
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