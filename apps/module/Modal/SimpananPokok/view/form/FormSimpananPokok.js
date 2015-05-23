Ext.define('BMT.module.Modal.SimpananPokok.view.form.FormSimpananPokok', {
    extend      : 'Ext.form.Panel',
    // store       : Ext.create('SMS.module.MasterData.SimpananPokok.store.SimpananPokok'),
    // requires    : ['SMS.module.MasterData.SimpananPokok.store.SimpananPokok'],
    alias       : 'widget.formsimpananpokok',
    id          : 'formsimpananpokok',
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
                        xtype       : 'datefield',
                        name        : 'tgl_bayar',
                        allowBlank  : true,
                        fieldLabel  : 'Tanggal Bayar',
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