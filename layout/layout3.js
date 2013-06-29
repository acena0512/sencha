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
				//pack : 'start'
				pack : 'center'
				//pack : 'end'
				//pack : 'justify'
			},
			items : [{
				//xtype : 'panel',	//紐낆떆�섏� �딆쑝硫��곸쐞 type���곸냽��
				style : 'background:red',
				html : 'First',
				flex : 1
			},{
				xtype : 'panel',
				style : 'background:blue',
				html : 'Second',
				flex : 1
			},{
				xtype : 'panel',
				style : 'background:green',
				html : 'Third',
				flex : 1
			},{
				flex : 1,
				layout : {
					type :'hbox',
					align : 'stretch',
					pack : 'center',
					
				},
				items :[{
					xtype : 'panel',
					style : 'background:red',
					html : 'Fourth-1' ,
					flex : 1
				}, {
					xtype : 'panel',
					style : 'background:skyblue',
					html : 'Fourth-2' ,
					flex : 1
				}]
			}]
		});
		// panel��1媛쒖씤 寃쎌슦 viewport���먮룞 add�쒕떎
		// Ext.Viewport.add(panel);
	}
});