Ext.define('BMT.module.Simpanan.SimpananUkhuwah.view.grid.GridTrsUkhuwah',{
    extend   : 'Ext.grid.Panel',
    // store    : 'BMT.module.Simpanan.SimpananUkhuwah.store.TrsUkhuwah',
    // requires : ['BMT.module.Simpanan.SimpananUkhuwah.store.TrsUkhuwah'],
    alias    : 'widget.gridtrsukhuwah',
    id       : 'gridtrsukhuwah', 
    margins     :'3px 3px 3px 3px',
    border      : false,
    frame       : true,
    columns  : [
        {
            text    : 'No',
            xtype   : 'rownumberer',
            width   : '10%'
        },
        {
            text     : 'ID',
            dataIndex: 'id',
            hidden   : true
        },
        {
            text     : 'ID ANGGOTA',
            dataIndex: 'id_anggota',
            hidden   : true
        },
        {
            text     : 'TrsUkhuwah',
            dataIndex: 'phone',
            width    : '65%'
        },
        {
            text     : 'Delete',
            xtype    :'actioncolumn',
            width    :'15%',
            items    : [{              
                iconCls: 'icon-delete',
                tooltip: 'Delete',
                handler: function(grid, rowIndex, colIndex) {
                    var rec         = grid.getStore().getAt(rowIndex);
                    var id          = rec.get('id');
                    var id_anggota  = rec.get('id_anggota');
                    Ext.MessageBox.show({
                        title           : 'Konfirmasi',
                        msg             : 'Anda yakin akan menghapus data yang terseleksi?',
                        buttons         : Ext.Msg.YESNO,
                        icon            : Ext.MessageBox.WARNING,
                        width           : 450,
                        fn              : function(btn, evtObj){
                            if (btn == 'yes') {
                                Ext.Ajax.request({
                                    url             : BASE_URL + 'phonebook/c_phonebook/delTrsUkhuwah',
                                    method          : 'POST',
                                    params          : { id : Ext.encode(id), id_anggota : id_anggota },   
                                    success         : function(response){
                                        var data    = Ext.JSON.decode(response.responseText);
                                        var storeModul = Ext.getStore('BMT.module.Simpanan.SimpananUkhuwah.store.TrsUkhuwah');
                                        var form        = Ext.getCmp('formphonebook');
                                        var grid        = Ext.getCmp('gridphonebook');
                                        grid.getSelectionModel().deselectAll();
                                        storeModul.removeAll();
                                        storeModul.reload();
                                        storeModul.add(data.data);
                                        form.getForm().reset();                                        
                                        me.getStore('BMT.module.Simpanan.SimpananUkhuwah.store.Phonebook').reload();
                                        me.getStore('BMT.module.Simpanan.SimpananUkhuwah.store.TrsUkhuwah').reload();
                                    }
                                });
                            }
                        }
                    });
                }
            }]
        }
    ]
});