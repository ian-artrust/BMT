Ext.define('BMT.module.Simpanan.SimpananWalimah.model.SimpananWalimah',{
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
			name 	: 'jumlah',
			type 	: 'string'
		},
		{
			name 	: 'tgl_bayar',
			type 	: 'date'
		}
	]	
});