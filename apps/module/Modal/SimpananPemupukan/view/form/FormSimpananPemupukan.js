Ext.define('BMT.module.Modal.SimpananPemupukan.view.form.FormSimpananPemupukan', {
    extend      : 'Ext.form.Panel',
    // store       : Ext.create('SMS.module.MasterData.SimpananPemupukan.store.SimpananPemupukan'),
    // requires    : ['SMS.module.MasterData.SimpananPemupukan.store.SimpananPemupukan'],
    alias       : 'widget.formsimpananpemupukan',
    id          : 'formsimpananpemupukan',
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
                        emptyText   : 'Besaran Simpanan Pemupukan',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                        flex        : 1
                    },
                    {
                        xtype       : 'datefield',
                        name        : 'tgl_simpokok',
                        allowBlank  : true,
                        fieldLabel  : 'Tgl Simpan',
                        emptyText   : 'Tanggal Bayar Simpanan Pemupukan',
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