Ext.define('BMT.module.Simpanan.SimpananAqiqoh.view.form.FormSimpananAqiqoh', {
    extend      : 'Ext.form.Panel',
    // store       : Ext.create('BMT.module.Simpanan.SimpananAqiqoh.store.SimpananAqiqoh'),
    // requires    : ['BMT.module.Simpanan.SimpananAqiqoh.store.SimpananAqiqoh'],
    alias       : 'widget.formsimpananaqiqoh',
    id          : 'formsimpananaqiqoh',
    layout      : 'fit',
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
                items       : [
                    {
                        xtype       : 'textfield',
                        name        : 'id',
                        hidden      : true,
                        fieldLabel  : 'ID',                    
                    },
                    {
                        xtype           : 'textfield',
                        fieldLabel      : 'Jumlah',
                        name            : 'jumlah',
                        allowBlank      : true,
                        anchor          : '100%',
                        emptyText       : 'Masukan Besaran Setoran',
                        padding         : '0px 2px 0px 2px'
                    },
                    {
                        xtype           : 'datefield',
                        name            : 'tgl_bayar',
                        fieldLabel      : 'Tanggal Bayar',
                        allowBlank      : true,
                        emptyText       : 'Tgl Bayar',
                        anchor          : '100%',
                        padding         : '0px 2px 0px 2px'
                    }
                ]
            }
        ];

        me.buttons = [
            {
                text    : 'Tambah Nomor',
                iconCls : 'icon-save',
                action  : 'save',
                padding : '0px 2px 0px 2px'
            },
            // {
            //     text    : 'Edit Nomor',
            //     iconCls : 'icon-edit',
            //     action  : 'update',
            //     padding : '0px 2px 0px 2px',
            //     disabled: updateSimpananAqiqoh
            // },
            {
                text    : 'Reset',
                iconCls : 'icon-refresh',
                padding : '0px 2px 0px 2px',
                action  : 'reset'
            }
        ];
        me.callParent(arguments);
    }  
});