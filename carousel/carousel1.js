Ext.application({
	launch : function(){
		var carousel = new Ext.create('Ext.Carousel',{
			flex : 1,
			ui : 'light',
			indicator : true,
			direction : 'horizontal',
			items : [{
				xtype : 'panel',
				html :'<img src="../images/s1.png" width ="400" /><br/>����:���<br/>�̸�:�ƹ���'
			},{
				xtype : 'panel',
				html :'<img src="../images/s2.png" width ="400" /><br/>����:���<br/>�̸�:�ƹ���'
			},{
				xtype : 'panel',
				html :'<img src="../images/s3.png" width ="400" /><br/>����:���<br/>�̸�:�ƹ���'
			}]
			
		});
		var panel = new Ext.create ('Ext.Panel',{
			layout : {
				type : 'vbox',
			},
			items : []
		});
		Ext.Viewport.add(panel);
	}
});