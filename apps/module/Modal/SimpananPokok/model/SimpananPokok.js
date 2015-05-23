Ext.define('BMT.module.Modal.SimpananPokok.model.SimpananPokok',{
	extend 	: 'Ext.data.Model',
	fields 	:[
		{
			name 	: 'id',
			type 	: 'string'
		},
		{
			name 	: 'id_anggota',
			type 	: 'string'
		},
		{
			name 	: 'nama_lengkap',
			type 	: 'string'
		},
		{
			name 	: 'no_anggota',
			type 	: 'string'
		},
		{
			name 	: 'tgl_bayar',
			type 	: 'date'
		},
		{
			name 	: 'jumlah',
			type 	: 'string'
		}
	]	
});