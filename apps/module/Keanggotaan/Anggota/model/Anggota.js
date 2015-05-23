Ext.define('BMT.module.Keanggotaan.Anggota.model.Anggota',{
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
			name 	: 'code_anggota',
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
			name 		: 'tgl_lahir',
			type 	 	: 'date',
			dateFormat 	: 'Y-m-d'
		},
		{
			name 	: 'tmp_lahir',
			type 	: 'string'
		},
		{
			name 	: 'gender',
			type 	: 'string'
		},
		{
			name 	: 'pekerjaan',
			type 	: 'string'
		},
		{
			name 	: 'phone',
			type 	: 'string'
		},
		{
			name 	: 'alamat',
			type 	: 'string'
		},
		{
			name 	: 'kecamatan',
			type 	: 'string'
		},
		{
			name 	: 'desa',
			type 	: 'string'
		},
		{
			name 	: 'zip',
			type 	: 'string'
		},
		{
			name 	: 'nama_waris',
			type 	: 'string'
		},
		{
			name 	: 'alamat_waris',
			type 	: 'string'
		},
		{
			name 	: 'hubungan',
			type 	: 'string'
		},
		{
			name 	: 'userfile',
			type 	: 'string'
		},
		{
			name 	: 'id_karyawan',
			type 	: 'string'
		},
		{
			name 	: 'active',
			type	: 'string'
		}
	]	
});