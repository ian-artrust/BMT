/**
 * @class BMT Viewport
 * @extends Container Viewport
 * Copyright Auf Software by Ian 
 */

Ext.define('BMT.view.panel.Dashboard',{
	extend 	: 'Ext.container.Container',
	alias 	: 'widget.paneldashboard',
	id 		: 'paneldashboard',
	initComponent : function(){
		var pnl = this;
		Ext.apply(pnl,{
			title 	: 'Home',
			iconCls : 'icon-home',
			layout 	: {
				type : 'fit', align : 'stretch'
			},
			xtype 	: 'container',
            items   : [
                {
                    xtype       : 'form',
                    cls         : 'logo',
                    modal       : true,
                    frame       : true,
                    hideHeader  : true,
                    html        : '<div id="welcome">Mitra Mentari Koperation System</div>' 
                }
            ]   
		});
		pnl.callParent(arguments);
	}
});

Ext.define('BMT.view.Viewport',{
 	extend 	: 'Ext.container.Viewport',
 	alias 	: 'widget.viewport',
 	id 		: 'viewport',
 	frame	: true,
 	layout 	: 'fit',
 	initComponent:function() {
 		Ext.apply(this,{
 			layout 		: 'border',
			xtype		: 'panel',
			defaults	: {frame: false, border: true},
			border		: false,
			items		:[
				{
					xtype 	: 'toolbar',
					region	: 'north',
					id		: 'appMenu',
					defaults	: {frame: true, border: false},
					border		: false,
					items 	: [
						{
	                		text	: 'General Setup',
	                		iconCls : 'icon-gear',
	                		menu 	: [
	                			{
	                				text 	: 'Data Master',
	                				iconCls : 'icon-master',
	                				menu 	: [
			                			{
			                				text 	: 'Data Karyawan',
			                				iconCls : 'icon-staff',
					                		handler : function(){
					                			Ext.create('BMT.module.GeneralSetup.DataMaster.DataKaryawan.view.DataKaryawan').show();
					                		}
			                			},
			                			{
			                				text 	: 'Data User',
			                				iconCls : 'icon-role2',
			                				handler : function(){
					                			Ext.create('BMT.module.GeneralSetup.DataMaster.DataUser.view.DataUser').show();
					                		}
			                			},
			                			{
			                				text 	: 'Cart of Account (COA)',
			                				iconCls : 'icon-coa',
			                				handler : function(){
					                			Ext.create('BMT.module.GeneralSetup.DataMaster.COA.view.COA').show();
					                		}
			                			}
			                		]
	                			},
	                			{
	                				text 	: 'Master HR',
	                				iconCls : 'icon-hr',
	                				menu 	: [
			                			{
			                				text 	: 'Job Level',
			                				iconCls : 'icon-joblevel',
			                				handler : function(){
					                			Ext.create('BMT.module.GeneralSetup.MasterHR.JobLevel.view.JobLevel').show();
					                		}
			                			},
			                			{
			                				text 	: 'Job Name',
			                				iconCls : 'icon-jobname',
			                				handler : function(){
					                			Ext.create('BMT.module.GeneralSetup.MasterHR.JobName.view.JobName').show();
					                		}
			                			}
			                		]
	                			}
	                		]
	                	},
						{
							xtype 	: 'splitbutton',
			                text 	: 'Keanggotaan',
			                iconCls : 'icon-user',
			                menu 	: [
			                	{
			                		text	: 'Daftar Anggota',
			                		iconCls : 'icon-user',
			                		handler : function(){
			                			Ext.create('BMT.module.Keanggotaan.Anggota.view.Anggota').show();
			                		}
			                	}
			                ]
						},
						{
	                		text	: 'Modal',
	                		iconCls : 'icon-simpanan',
	                		menu 	: [
	                			{
	                				text 	: 'Simpanan Pokok',
	                				iconCls : 'icon-simpokok',
	                				handler : function(){
			                			Ext.create('BMT.module.Modal.SimpananPokok.view.SimpananPokok').show();
			                		}
	                			},
	                			{
	                				text 	: 'Simpanan Wajib',
	                				iconCls : 'icon-simwajib',
	                				handler : function(){
			                			Ext.create('BMT.module.Modal.SimpananWajib.view.SimpananWajib').show();
			                		}
	                			},
	                			{
	                				text 	: 'Simpanan Pemupukan',
	                				iconCls : 'icon-simpemupukan',
	                				handler : function(){
			                			Ext.create('BMT.module.Modal.SimpananPemupukan.view.SimpananPemupukan').show();
			                		}
	                			}
	                		]
	                	},
	                	{
	                		text	: 'Pembiayaan',
	                		iconCls : 'icon-pembiayaan2',
	                		menu 	: [
	                			{
	                				text 	: 'Pengajuan Pembiayaan',
	                				iconCls : 'icon-pembiayaan'
	                			},
	                			{
	                				text 	: 'Morobahah',
	                				iconCls : 'icon-pembiayaan'
	                			},
	                			{
	                				text 	: 'Musyaroah',
	                				iconCls : 'icon-pembiayaan'
	                			},
	                			{
	                				text 	: 'Qordh Hasan',
	                				iconCls : 'icon-pembiayaan'
	                			},
	                			{
	                				text 	: 'Mudarobah',
	                				iconCls : 'icon-pembiayaan'
	                			}
	                		]
	                	},
						{
							xtype 	: 'splitbutton',
			                text 	: 'Simpanan',
			                iconCls : 'icon-product',
			                menu 	: [
	                			{
	                				text 	: 'Simpanan Umat',
	                				iconCls : 'icon-umat',
	                				handler : function(){
			                			Ext.create('BMT.module.Simpanan.SimpananUmat.view.SimpananUmat').show();
			                		}
	                			},
	                			{
	                				text 	: 'Simpanan Pelajar',
	                				iconCls : 'icon-pelajar',
	                				handler	: function(){
	                					Ext.create('BMT.module.Simpanan.SimpananPelajar.view.SimpananPelajar').show();
	                				}
	                			},
	                			{
	                				text 	: 'Simpanan Qurban',
	                				iconCls : 'icon-qurban',
	                				handler	: function(){
	                					Ext.create('BMT.module.Simpanan.SimpananQurban.view.SimpananQurban').show();
	                				}
	                			},
	                			{
	                				text 	: 'Simpanan Walimah',
	                				iconCls : 'icon-walimah',
	                				handler	: function(){
	                					Ext.create('BMT.module.Simpanan.SimpananWalimah.view.SimpananWalimah').show();
	                				}
	                			},
	                			{
	                				text 	: 'Simpanan Aqiqoh',
	                				iconCls : 'icon-aqiqoh',
	                				handler	: function(){
	                					Ext.create('BMT.module.Simpanan.SimpananAqiqoh.view.SimpananAqiqoh').show();
	                				}
	                			},
	                			{
	                				text 	: 'Simpanan Idul Fitri',
	                				iconCls : 'icon-idulfitri',
	                				handler	: function(){
	                					Ext.create('BMT.module.Simpanan.SimpananIdulFitri.view.SimpananIdulFitri').show();
	                				}
	                			},
	                			{
	                				text 	: 'Simpanan Ukhuwah',
	                				iconCls : 'icon-ukhuwah',
	                				handler	: function(){
	                					Ext.create('BMT.module.Simpanan.SimpananUkhuwah.view.SimpananUkhuwah').show();
	                				}
	                			},
	                			{
	                				text 	: 'Simpanan Hari Tua',
	                				iconCls : 'icon-haritua',
	                				handler	: function(){
	                					Ext.create('BMT.module.Simpanan.SimpananHariTua.view.SimpananHariTua').show();
	                				}
	                			},
	                			{
	                				text 	: 'Simpanan Haji',
	                				iconCls : 'icon-haji',
	                				handler	: function(){
	                					Ext.create('BMT.module.Simpanan.SimpananHaji.view.SimpananHaji').show();
	                				}
	                			},
	                			{
	                				text 	: 'Simpanan Bersalin',
	                				iconCls : 'icon-salin',
	                				handler	: function(){
	                					Ext.create('BMT.module.Simpanan.SimpananBersalin.view.SimpananBersalin').show();
	                				}
	                			},
	                			{
	                				text 	: 'Simpanan Jangka Panjang',
	                				iconCls : 'icon-jp',
	                				handler	: function(){
	                					Ext.create('BMT.module.Simpanan.SimpananJangkaPanjang.view.SimpananJangkaPanjang').show();
	                				}
	                			}
			                ]
						},
						{
							xtype 	: 'splitbutton',
			                text 	: 'Marketing',
			                iconCls : 'icon-marketing',
			                menu 	: [
	                			{
	                				text 	: 'Profile Marketing',
	                				iconCls : 'icon-profile',
	                				handler	: function(){
	                					Ext.create('BMT.module.Marketing.ProfileMarketing.view.ProfileMarketing').show();
	                				}
	                			},
	                			{
	                				text 	: 'Nasabah Handle',
	                				iconCls : 'icon-nasabah',
	                				handler	: function(){
	                					Ext.create('BMT.module.Marketing.NasabahHandle.view.NasabahHandle').show();
	                				}
	                			}
	                		]
						},
						{
	                		text 	: 'Tools',
	                		iconCls : 'icon-tools',
	                		menu 	: [
	                			// {
	                			// 	text 	: 'Indexs',
	                			// 	iconCls : 'icon-index'
	                			// },
	                			{
	                				text 	: 'Transaksi Kas',
	                				iconCls : 'icon-kas'
	                			},
	                			{
	                				text 	: 'Transaksi Non Kas',
	                				iconCls : 'icon-nonkas'
	                			},
	                			{
	                				text 	: 'Simpanan',
	                				iconCls : 'icon-simpanan'
	                			},
	                			{
	                				text 	: 'Mutasi Simpanan',
	                				iconCls : 'icon-mutasisim'
	                			}
	                		]
	                	},
						{
			                text 	: 'Akunting',
			                iconCls : 'icon-akunting',
	                		menu 	: [
	                			{
	                				text 	: 'Input Saldo',
	                				iconCls : 'icon-saldo',
	                				menu 	: [
			                			{
			                				text 	: 'Kas',
			                				iconCls : 'icon-kas'
			                			},
			                			{
			                				text 	: 'Buku Besar',
			                				iconCls : 'icon-bukubesar'
			                			},
			                			{
			                				text 	: 'Simpanan Anggota',
			                				iconCls : 'icon-simanggota'
			                			},
			                			{
			                				text 	: 'Beban Bagi Hasil',
			                				iconCls : 'icon-bahas'
			                			}
			                		]
	                			},
	                			{
	                				text 	: 'Neraca Keuangan',
	                				iconCls : 'icon-nrckeuangan'
	                			},
	                			{
	                				text 	: 'Laporan Laba Rugi',
	                				iconCls : 'icon-labarugi'
	                			}
	                		]
						},
						{
			                text 	: 'Laporan',
			                iconCls : 'icon-laporan',
	                		handler : function(btn){
	                			Ext.create('BMT.module.Send.view.Send').show();
	                		}
						},
						'->',
						{
							xtype 	:'button',
			                text 	: USERNAME,
			                iconCls : 'icon-user',
			                action 	: 'editPassword'
						},
						{
							xtype 	:'button',
			                text 	: 'Logout',
			                iconCls : 'icon-logout',
			                action 	: 'logout'
						}
					] 
				},
				{
					region 	: 'center',
					xtype 	: 'paneldashboard'
				},
				{
					id 		: 'mainContainer ',
					xtype 	: 'panel',
					region	: 'south',
					layout	: 'fit',
					frame 	: true,
					border 	: false,
					margins : '2px 2px 2x 2px',
					bbar       : [                    
                        '->',
                        {
                            text        : 'Copyright &copy; 2015 BMT Mentari',
                            enabled    : true
                        },
                        '-',
                        {
                            text        : 'Auf System',
                            enabled    : true
                        },
                        '-',
                        {
                            id          : 'datestamp',
                            text        : '01-01-1970',
                            enabled    : true
                        },
                        '-',
                        {
                            id          : 'timestamp',
                            enabled     : true,
                            iconCls     : 'icon-clock',
                            text        : '00:00:00'
                        }
                    ]        
				}
			]
 		});
 		this.callParent(arguments);
 	}
 });