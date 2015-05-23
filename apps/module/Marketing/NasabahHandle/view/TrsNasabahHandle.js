Ext.define('BMT.module.Marketing.NasabahHandle.view.TrsNasabahHandle', {
    extend   :  'Ext.panel.Panel',
    alias    : 'widget.trsnasabahhandle',
    id       : 'trsnasabahhandle',
    layout   : 'fit',     
    requires : [
        'BMT.module.Marketing.NasabahHandle.view.grid.GridTrsNasabahHandle'
    ],
    layout      : {
        type    :'vbox',
        align   :'stretch',
        border  : false
    },
    defaults    : {
        flex    : 1
    },    
    items       : [ 
        {xtype   : 'gridtrsnasabahhandle', flex : 1.5},         
    ]
});