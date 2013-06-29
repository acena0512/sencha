Ext.application({
	launch : function() {
		var rootPanel = new Ext.create('Ext.Panel', {
			fullscreen : true,
			layout : {
				type : 'vbox',
				//align : 'start',
				//align : 'center',
				//align : 'end',
				align : 'stretch',
				pack : 'start'
				//pack : 'center'
				//pack : 'end'
				//pack : 'justify'
			},
			items : [{
				//xtype : 'panel',	//紐낆떆�섏� �딆쑝硫��곸쐞 type���곸냽��
				style : 'background:red',
				html : 'First',
				flex : 2
			},{
				xtype : 'panel',
				style : 'background:blue',
				html : 'Second'
			},{
				xtype : 'panel',
				style : 'background:green',
				html : 'Third'
			},{
				xtype : 'panel',
				style : 'background:yellow',
				html : 'Fourth'
			}]
		});
		// panel��1媛쒖씤 寃쎌슦 viewport���먮룞 add�쒕떎
		// Ext.Viewport.add(panel);
	}
});