Ext.define('BMT.module.GeneralSetup.DataMaster.DataKaryawan.model.DataKaryawan',{
	extend 	: 'Ext.data.Model',
	fields 	:[
		{
			name 	: 'id',
			type 	: 'string'
		},
		{
			name 	: 'nama_lengkap',
			type 	: 'string'
		},
		{
			name 	: 'nik',
			type 	: 'string'
		},
		{
			name 	: 'card_id',
			type 	: 'string'
		},
		{
			name 	: 'no_ktp',
			type 	: 'string'
		},
		{
			name 	: 'no_tlp1',
			type 	: 'string'
		},
		{
			name 	: 'no_tlp2',
			type 	: 'string'
		},
		{
			name 	: 'alamat',
			type 	: 'string'
		},
		{
			name 	: 'tgl_lahir',
			type 	: 'date',
            dateFormat: 'Y-m-d'
		},
		{
			name 	: 'tmp_lahir',
			type 	: 'string'
		},
		{
			name 	: 'zip',
			type 	: 'string'
		},
		{
			name 	: 'email',
			type 	: 'string'
		},
		{
			name 	: 'id_jobname',
			type 	: 'string'
		},
		{
			name 	: 'jobname',
			type 	: 'string'
		},
		{
			name 	: 'userfile',
			type 	: 'string'
		}
	]	
});