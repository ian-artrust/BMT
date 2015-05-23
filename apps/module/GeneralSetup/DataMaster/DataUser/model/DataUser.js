Ext.define('BMT.module.GeneralSetup.DataMaster.DataUser.model.DataUser',{
	extend 	: 'Ext.data.Model',
	fields 	:[
		{
			name 	: 'id',
			type 	: 'string'
		},
		{
			name 	: 'id_profile',
			type 	: 'string'
		},
		{
			name 	: 'nama_lengkap',
			type 	: 'string'
		},
		{
			name 	: 'username',
			type 	: 'string'
		},
		{
			name 	: 'password',
			type 	: 'string'
		},
		{
			name 	: 'level',
			type 	: 'string'
		},
		{
			name 	: 'active',
			type	: 'string'
		}
	]	
});