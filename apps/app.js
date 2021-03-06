Ext.Loader.setConfig({
	enabled : true,
	paths 	: {'Ext' : BASE_URL + 'lib/backend/extjs4/src'}
});

Ext.application({
    name 		: 'BMT',
    appFolder 	: BASE_URL + 'apps',
    controllers : [
    	'BMT.controller.Dashboard',
    	'BMT.module.GeneralSetup.MasterHR.JobLevel.controller.JobLevel',
    	'BMT.module.GeneralSetup.MasterHR.JobName.controller.JobName',
    	'BMT.module.GeneralSetup.DataMaster.DataKaryawan.controller.DataKaryawan'
    ],
    autoCreateViewport : true,

    launch: function() {
    	var me = this;
    	setInterval(me.Jam, 1000);    
    },

    Jam : function(){
    	var tanggal = new Date();

		/* Jam */
		var jam = tanggal.getHours().toString();
		if(jam.length==1){
			jam = '0'+jam;
		}

		/* Menit */
		var menit = tanggal.getMinutes().toString();
		if(menit.length==1){
			menit = '0'+menit;
		}

		/* Detik */
		var detik = tanggal.getSeconds().toString();
		if(detik.length==1){
			detik = '0'+detik;
		}

		Ext.getCmp('timestamp').update(jam+':'+menit+':'+detik);
		Ext.getCmp('datestamp').update(tanggal.getDate()+'-'+(tanggal.getMonth()+1)+'-'+tanggal.getFullYear());
    }
});