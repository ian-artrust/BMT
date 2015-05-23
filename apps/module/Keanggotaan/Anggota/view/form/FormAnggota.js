Ext.define('BMT.module.Keanggotaan.Anggota.view.form.FormAnggota', {
    extend      : 'Ext.form.Panel',
    store       : Ext.create('BMT.module.Keanggotaan.Anggota.store.Anggota'),
    requires    : ['BMT.module.Keanggotaan.Anggota.store.Anggota'],
    alias       : 'widget.formanggota',
    id          : 'formanggota',
    layout      : 'fit',
    modal       : true,
    border      : false,
    frame       : false,
    margins     : '3px',
    initComponent: function() {
        var me = this;
        me.items  = [
            {
                xtype       : 'tabpanel',
                activeTab   : 0,
                border      : false,
                frame       : false,
                items       : [
                    {
                        xtype       : 'panel',
                        autoScroll  : true,
                        border      : false,
                        frame       : false,
                        layout      : {
                            type    : 'fit'
                        },
                        title       : 'Biography',
                        defaults    : {
                            anchor      : '100%',
                            msgTarget   : 'under'
                        },
                        items       : [
                            {
                                xtype   : 'biography'
                            }
                        ]
                    }, 
                    {
                        xtype       : 'panel',
                        autoScroll  : true,
                        border      : false,
                        frame       : false,
                        layout      : {
                            type    : 'fit'
                        },
                        title       : 'Simpanan Anggota',
                        defaults    : {
                            anchor      : '100%',
                            msgTarget   : 'under'
                        },
                        items       : [
                            {
                                // xtype   : 'biography'
                            }
                        ]
                    }
                ]
            }
        ];
        me.callParent(arguments);
    }  
});

/*===================================== Panel Biography ==========================================*/

Ext.define('BMT.module.Keanggotaan.Anggota.view.form.FormAnggota.Biography', {
    extend  : 'Ext.form.Panel',
    alias   : 'widget.biography',
    id      : 'biography',
    frame   : true,
    border  : false,
    items  : [
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
                        xtype   : 'container',
                        layout  : {type : 'column'},
                        items   : [ 
                            {
                                columnWidth : .20,
                                xtype   : 'container',
                                layout  : {type: 'column'},
                                items   : [
                                    {
                                        xtype       : 'fieldset',
                                        title       : 'Picture',
                                        width       : 120,
                                        height      : 140,
                                        items       : [
                                            {
                                                xtype   : 'image',
                                                itemId  : 'imagePreview',
                                                height  : 120,
                                                width   : 140
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                columnWidth : .80,
                                xtype       : 'container',
                                layout      : 'anchor',
                                defaults    : { anchor : '100%'},
                                items       : [
                                    {
                                        xtype       : 'container',
                                        layout      : 'anchor',
                                        defaults    : { anchor : '100%'},
                                        items       : [{
                                            xtype   : 'fieldcontainer',
                                            layout  : 'hbox',
                                            items   : [
                                                {
                                                    xtype       : 'textfield',
                                                    name        : 'nama_lengkap',
                                                    allowBlank  : true,
                                                    fieldLabel  : 'Nama Lengkap',
                                                    emptyText   : 'Nama Lengkap',
                                                    anchor      : '100%',
                                                    padding     : '0px 2px 0px 2px',
                                                    margin      : '0px 15px 0px 2px',
                                                    flex        : 1
                                                },
                                                {
                                                    fieldLabel  : 'Aktif',
                                                    tooltip     : 'Is Active?',
                                                    xtype       : 'checkboxfield',
                                                    name        : 'active',
                                                    checked     : false,
                                                    labelWidth  : 35,
                                                    padding     : '0px 2px 5px 2px',
                                                }
                                            ]
                                        }]
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
                                                        fieldLabel      : 'ID Card',
                                                        emptyText       : 'Select ID Card',
                                                        tooltip         : 'Select ID Card',
                                                        queryMode       : 'local',
                                                        name            : 'card_id',
                                                        xtype           : 'combobox',
                                                        store           : Ext.create('BMT.module.Keanggotaan.Anggota.store.idcard'),
                                                        displayField    : 'name',
                                                        valueField      : 'id',
                                                        padding         : '0px 2px 0px 2px',
                                                        flex            : 1
                                                    },
                                                    {
                                                        emptyText       : 'Type ID Card Number',
                                                        tooltip         : 'Type ID Card Number',
                                                        name            : 'no_ktp',
                                                        xtype           : 'textfield',
                                                        editable        : true,
                                                        anchor          : '100%',
                                                        padding         : '0px 2px 0px 2px',
                                                        flex            : 1
                                                    }
                                                ]
                                            }
                                        ]
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
                                                        fieldLabel      : 'Tgl Lahir',
                                                        emptyText       : 'Select Tanggal Lahir',
                                                        tooltip         : 'Select Tanggal Lahir',
                                                        name            : 'tgl_lahir',
                                                        xtype           : 'datefield',
                                                        msgTarget       : 'under',
                                                        type            : 'date', 
                                                        format          : 'Y-m-d',
                                                        submitFormat    : 'Y-m-d',
                                                        padding         : '0px 2px 0px 2px',
                                                        flex            : 1
                                                    },
                                                    {
                                                        emptyText       : 'Tempat Lahir',
                                                        tooltip         : 'Tempat Lahir',
                                                        name            : 'tmp_lahir',
                                                        xtype           : 'textfield',
                                                        editable        : true,
                                                        anchor          : '100%',
                                                        padding         : '0px 2px 0px 2px',
                                                        flex            : 1
                                                    }
                                                ]
                                            }
                                        ]
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
                                                        fieldLabel      : 'Jenis Kelamin',
                                                        emptyText       : 'Select Jenis Kelamin',
                                                        tooltip         : 'Select Jenis Kelamin',
                                                        queryMode       : 'local',
                                                        name            : 'gender',
                                                        xtype           : 'combobox',
                                                        store           : Ext.create('BMT.module.Keanggotaan.Anggota.store.Gender'),
                                                        displayField    : 'gender',
                                                        valueField      : 'id',
                                                        padding         : '0px 2px 0px 2px',
                                                        flex            : 1
                                                    },
                                                    {
                                                        emptyText       : 'Pekerjaan',
                                                        tooltip         : 'Pekerjaan',
                                                        name            : 'pekerjaan',
                                                        xtype           : 'textfield',
                                                        editable        : true,
                                                        anchor          : '100%',
                                                        padding         : '0px 2px 0px 2px',
                                                        flex            : 1
                                                    }
                                                ]
                                            }
                                        ]
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
                                                        xtype       : 'textfield',
                                                        name        : 'phone',
                                                        fieldLabel  : 'Handphone',
                                                        allowBlank  : true,
                                                        emptyText   : 'Masukan Nomor Handphone',
                                                        anchor      : '100%',
                                                        padding     : '0px 2px 0px 2px',
                                                        flex        : 1
                                                    },
                                                    {
                                                        emptyText       : 'Kode Pos',
                                                        tooltip         : 'kode Pos',
                                                        name            : 'zip',
                                                        xtype           : 'textfield',
                                                        editable        : true,
                                                        anchor          : '100%'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype       : 'textareafield',
                        name        : 'alamat',
                        allowBlank  : true,
                        fieldLabel  : 'Alamat',
                        emptyText   : 'Alamat',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
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
                                        fieldLabel      : 'Kecamatan',
                                        emptyText       : 'Select Kecamatan',
                                        tooltip         : 'Select Kecamatan',
                                        queryMode       : 'local',
                                        name            : 'kecamatan',
                                        xtype           : 'combobox',
                                        store           : Ext.create('BMT.module.Keanggotaan.Anggota.store.Kecamatan'),
                                        displayField    : 'nama_kecamatan',
                                        valueField      : 'id',
                                        anchor          : '100%',
                                        padding         : '0px 2px 0px 2px',
                                        flex            : 1.2,
                                    },
                                    {
                                        emptyText       : 'Select Desa',
                                        tooltip         : 'Select Desa',
                                        queryMode       : 'local',
                                        name            : 'desa',
                                        xtype           : 'combobox',
                                        store           : Ext.create('BMT.module.Keanggotaan.Anggota.store.Desa'),
                                        displayField    : 'nama_desa',
                                        valueField      : 'id',
                                        anchor          : '100%',
                                        padding         : '0px 2px 0px 2px',
                                        flex            : 0.8,
                                    }
                                ]
                            }
                        ]
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
                                        xtype       : 'textfield',
                                        fieldLabel  : 'Ahli Waris',
                                        name        : 'nama_waris',
                                        allowBlank  : true,
                                        emptyText   : 'Nama Ahli Waris',
                                        anchor      : '100%',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1
                                    },
                                    {
                                        xtype       : 'textfield',
                                        name        : 'hubungan',
                                        allowBlank  : true,
                                        emptyText   : 'Hubungan dengan ahli waris',
                                        anchor      : '100%',
                                        padding     : '0px 2px 0px 2px',
                                        flex        : 1
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        xtype       : 'textareafield',
                        name        : 'alamat_waris',
                        allowBlank  : true,
                        fieldLabel  : 'Alamat',
                        emptyText   : 'Alamat Waris',
                        anchor      : '100%',
                        padding     : '0px 2px 0px 2px',
                    },
                    {
                        fieldLabel      : 'Marketing',
                        emptyText       : 'Select Marketing',
                        tooltip         : 'Select Marketing',
                        queryMode       : 'local',
                        name            : 'id_karyawan',
                        xtype           : 'combobox',
                        // store           : Ext.create('SMS.module.MasterData.Kesatuan.store.Kesatuan'),
                        displayField    : 'name',
                        valueField      : 'id',
                        anchor          : '100%',
                        padding         : '0px 2px 0px 2px',
                        flex            : 0.8,
                    },
                    {
                        xtype       : 'filefield',
                        fieldLabel  : 'Photo',
                        name        : 'userfile',
                        id          : 'userfile',
                        anchor      : '100%',
                        listeners   : {
                            'afterrender': function(field, value, opts){
                                var me = this;
                                imagem = me.up('form').queryById('imagePreview');


                                //If is multiple file upload
                                field.fileInputEl.dom.multiple = true;
                                
                                //ação de selecionar arquivos
                                field.fileInputEl.dom.onchange = function(){
                                    var filerdr = new FileReader();
                                        input = this;
                                    
                                    filerdr.onload = function(e) {
                                       imagem.setSrc(e.target.result);
                                    }
                                    //Possui todas os arquivos a serem enviados.
                                    filerdr.readAsDataURL(input.files[0]);    
                                }                        
                            }
                        }
                    }
                ]
            }
        ],
        buttons : [
            {
                text    : 'Simpan',
                iconCls : 'icon-save',
                // disabled: createAnggota,
                handler: function() {
                    var form              = this.up('form').getForm();
                    var nama_lengkap      = form.findField('nama_lengkap').getValue();
                    var card_id           = form.findField('card_id').getValue();
                    var no_ktp            = form.findField('no_ktp').getValue();
                    var tgl_lahir         = form.findField('tgl_lahir').getValue();
                    var tmp_lahir         = form.findField('tmp_lahir').getValue();
                    var gender            = form.findField('gender').getValue();
                    var pekerjaan         = form.findField('pekerjaan').getValue();
                    var phone             = form.findField('phone').getValue();
                    var alamat            = form.findField('alamat').getValue();
                    var kecamatan         = form.findField('kecamatan').getValue();
                    var desa              = form.findField('desa').getValue();
                    var zip               = form.findField('zip').getValue();
                    var nama_waris        = form.findField('nama_waris').getValue();
                    var hubungan          = form.findField('hubungan').getValue();
                    var alamat_waris      = form.findField('alamat_waris').getValue();
                    var id_karyawan       = form.findField('id_karyawan').getValue();
                    var userfile          = form.findField('userfile').getValue();
                    var active            = form.findField('active').getValue();

                    if(form.isValid()){
                        form.submit({
                            url     : BASE_URL + 'anggota/c_anggota/saveAnggota',
                            headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
                            method  : 'POST',
                            params  : {
                                nama_lengkap      : nama_lengkap, 
                                card_id           : card_id,
                                no_ktp            : no_ktp,
                                tgl_lahir         : tgl_lahir,
                                tmp_lahir         : tmp_lahir,
                                gender            : gender,
                                pekerjaan         : pekerjaan,
                                phone             : phone,
                                alamat            : alamat,
                                kecamatan         : kecamatan,
                                desa              : desa,
                                zip               : zip,
                                nama_waris        : nama_waris,
                                hubungan          : hubungan,
                                alamat_waris      : alamat_waris,
                                id_karyawan       : id_karyawan,
                                userfile          : userfile,
                                active            : active
                            },
                            waitMsg: 'Please Wait Data is Processing',
                              success : function(response, op){
                                Ext.MessageBox.show({
                                    title           : 'Informasi',
                                    msg             : Ext.data.JsonReader(op.result.total),
                                    icon            : Ext.MessageBox.INFO,
                                    buttons         : Ext.MessageBox.OK
                                });
                                var form    = Ext.getCmp('formanggota');
                                var grid    = Ext.getCmp('gridanggota');
                                var pic     = form.queryById('imagePreview');
                                pic.setSrc('');
                                form.getForm().reset();
                                grid.getSelectionModel().deselectAll();
                                Ext.ComponentQuery.query('#gridanggota')[0].getStore('BMT.module.Keanggotaan.Anggota.store.Anggota').reload();
                            },
                            failure : function(response, op){
                                Ext.MessageBox.show({
                                    title           : 'Error',
                                    msg             : Ext.data.JsonReader(op.result.total),
                                    icon            : Ext.MessageBox.ERROR,
                                    buttons         : Ext.MessageBox.OK
                                });                   
                            }                                   
                        }); 
                    }
                }
            },
            {
                text        : 'Edit',
                iconCls     : 'icon-edit',
                // disabled    : updateAnggota,
                handler     : function(){
                    var form              = this.up('form').getForm();
                    var id                = form.findField('id').getValue();
                    var nama_lengkap      = form.findField('nama_lengkap').getValue();
                    var card_id           = form.findField('card_id').getValue();
                    var no_ktp            = form.findField('no_ktp').getValue();
                    var tgl_lahir         = form.findField('tgl_lahir').getRawValue();
                    var tmp_lahir         = form.findField('tmp_lahir').getValue();
                    var gender            = form.findField('gender').getValue();
                    var pekerjaan         = form.findField('pekerjaan').getValue();
                    var phone             = form.findField('phone').getValue();
                    var alamat            = form.findField('alamat').getValue();
                    var kecamatan         = form.findField('kecamatan').getValue();
                    var desa              = form.findField('desa').getValue();
                    var zip               = form.findField('zip').getValue();
                    var nama_waris        = form.findField('nama_waris').getValue();
                    var hubungan          = form.findField('hubungan').getValue();
                    var alamat_waris      = form.findField('alamat_waris').getValue();
                    var id_karyawan       = form.findField('id_karyawan').getValue();
                    var userfile          = form.findField('userfile').getValue();
                    var active            = form.findField('active').getValue();
                    Ext.MessageBox.show({
                        title   : 'Konfirmasi',
                        msg     : 'Anda Yakin Merubah Data',
                        buttons : Ext.Msg.YESNO,
                        icon    : Ext.MessageBox.WARNING,
                        width   : 500,
                        fn      : function(btn,evtObj){
                            if(btn == 'yes'){
                                form.submit({
                                    url     : BASE_URL + 'anggota/c_anggota/editAnggota',
                                    headers : {'Content-Type':'multipart/form-data; charset=UTF-8'},
                                    method  : 'POST',
                                    params  : {
                                        id                : id,
                                        nama_lengkap      : nama_lengkap, 
                                        card_id           : card_id,
                                        no_ktp            : no_ktp,
                                        tgl_lahir         : tgl_lahir,
                                        tmp_lahir         : tmp_lahir,
                                        gender            : gender,
                                        pekerjaan         : pekerjaan,
                                        phone             : phone,
                                        alamat            : alamat,
                                        kecamatan         : kecamatan,
                                        desa              : desa,
                                        zip               : zip,
                                        nama_waris        : nama_waris,
                                        hubungan          : hubungan,
                                        alamat_waris      : alamat_waris,
                                        id_karyawan       : id_karyawan,
                                        userfile          : userfile,
                                        active            : active
                                    },
                                    success : function(response, op){
                                        Ext.MessageBox.show({
                                            title       : 'Informasi',
                                            msg         : Ext.data.JsonReader(op.result.total),
                                            icon        : Ext.MessageBox.INFO,
                                            buttons     : Ext.MessageBox.OK,
                                            fn          : function(btn, gridPanel, selected){
                                                var form    = Ext.getCmp('formanggota');
                                                var grid    = Ext.getCmp('gridanggota');
                                                var pic     = form.queryById('imagePreview');
                                                pic.setSrc('');
                                                form.getForm().reset();
                                                grid.getSelectionModel().deselectAll();
                                                var saveButton = form.down('button[text=Save]');
                                                saveButton.setDisabled(false);
 
                                                var updateButton = form.down('button[text=Edit]');
                                                updateButton.setDisabled(true);
                                                Ext.ComponentQuery.query('#gridanggota')[0].getStore('BMT.module.Keanggotaan.Anggota.store.Anggota').reload();
                                            }        
                                        });
                                    },
                                    failure : function(response, op){
                                        Ext.MessageBox.show({
                                            title   : 'Error',
                                            msg     : Ext.data.JsonReader(op.result.total),
                                            icon    : Ext.MessageBox.ERROR,
                                            buttons : Ext.MessageBox.OK,
                                            fn      : function(btn, gridPanel, selected){
                                                var form    = Ext.getCmp('formanggota');
                                                var grid    = Ext.getCmp('gridanggota');
                                                var pic     = form.queryById('imagePreview');
                                                pic.setSrc('');
                                                form.getForm().reset();
                                                grid.getSelectionModel().deselectAll();
                                                if(createAnggota == false){
                                                    var saveButton = form.down('button[text=Save]');
                                                    saveButton.setDisabled(false);
                                                }else{
                                                    var saveButton = form.down('button[text=Save]');
                                                    saveButton.setDisabled(true);
                                                }

                                                var updateButton = form.down('button[text=Edit]');
                                                updateButton.setDisabled(true);
                                                Ext.ComponentQuery.query('#gridanggota')[0].getStore('SMS.module.Rooms.CategoryRoom.store.CategoryRoom').reload();
                                            }  
                                        });                   
                                    }
                                });
                            }
                        }
                    });
                }
            },
            {
                text    : 'Reset',
                iconCls : 'icon-refresh',
                action  : 'reset'
            }
        ]
});