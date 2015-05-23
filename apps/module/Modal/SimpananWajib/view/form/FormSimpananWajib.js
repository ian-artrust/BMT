Ext.define('BMT.module.Modal.SimpananWajib.view.form.FormSimpananWajib', {
    extend      : 'Ext.form.Panel',
    // store       : Ext.create('SMS.module.MasterData.SimpananWajib.store.SimpananWajib'),
    // requires    : ['SMS.module.MasterData.SimpananWajib.store.SimpananWajib'],
    alias       : 'widget.formsimpananwajib',
    id          : 'formsimpananwajib',
    layout      : 'fit',
    modal       : true,
    border      : false,
    frame       : true,
    margins     : '3px',
    initComponent: function() {
        var me = this;
        me.items  = [
            {
                xtype       : 'form',
                extend      : 'Ext.form.Panel',
                bodyPadding : 5,
                frame       : true,
                border      : false,
                items       : [
                    {
                        xtype       : 'textfield',
                        name        : 'id',
                        hidden      : true,
                        fieldLabel  : 'ID',                    
                    },
                    {
                        xtype       : 'textfield',
                        name        : 'jumlah',
                        allowBlank  : true,
                        fieldLabel  : 'Jumlah',
                        emptyText   : 'Besaran Simpanan Pokok',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        flex        : 1
                    },
                     {
                        xtype       : 'container',
                        layout      : 'anchor',
                        defaults    : {
                            anchor  : '100%'
                        },
                        anchor          : '100%',
                        items       : [
                            {
                                xtype       : 'fieldcontainer',
                                layout      : 'hbox',
                                items       : [
                                    {
                                        fieldLabel      : 'Bulan Bayar',
                                        emptyText       : 'Pilih Bulan Pembayaran',
                                        tooltip         : 'Pilih Bulan Pembayaran',
                                        queryMode       : 'local',
                                        name            : 'bulan',
                                        xtype           : 'combobox',
                                        // store           : Ext.create('SMS.module.MasterData.Kecamatan.store.Kecamatan'),
                                        displayField    : 'name',
                                        valueField      : 'id',
                                        anchor          : '100%',
                                        padding         : '0px 2px 0px 2px',
                                        flex            : 1,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype       : 'datefield',
                        name        : 'tgl_simpokok',
                        allowBlank  : true,
                        fieldLabel  : 'Tgl Simpan',
                        emptyText   : 'Tanggal Bayar Simpanan Pokok',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        flex        : 1
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text    : 'Simpan',
                iconCls : 'icon-save',
                action  : 'save'
            },
            {
                text        : 'Edit',
                iconCls     : 'icon-edit',
                action      : 'update'
            },
            {
                text    : 'Reset',
                iconCls : 'icon-refresh',
                action  : 'reset'
            }
        ];
        me.callParent(arguments);
    }  
});