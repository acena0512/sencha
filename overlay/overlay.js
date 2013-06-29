Ext.application({
	launch : function(){
		var overlayToolbar = new Ext.create('Ext.Toolbar',{
			docked : 'top',
			items : [{
				xtype : 'spacer'
			},{
				xtype : 'button',
				text : '�ݱ�',
				ui : 'decline-round',
				handler : function(btn,event){
					overlay.hide();
				}
			}]
			
		});//end overlayToolbar
		var overlay = new Ext.create('Ext.Panel',{
			floatingCls : 'x-floating',
			modal : true,
			contentEl :'overlayid',
			items : overlayToolbar,
			width : 350,
			height : 350
		});//end overlay
		
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			items : [{
				xtype : 'toolbar',
				docked : 'top',
				items : [{
					xtype : 'button',
					text : '��ư overlay',
					handler : function(btn, event){
						overlay.setCentered(false);
						overlayToolbar.setTitle('��ư�� ��ġ�� Overlay');
						overlay.show();
					}
				},{
					xtype : 'spacer'
				},{
					xtype : 'button',
					text : '��� overlay',
					handler : function(btn, event){
						overlay.setCentered(true);
						overlayToolbar.setTitle('�߾ӿ� ��ġ�� Overlay');
						overlay.show()
					}
				}]
			}]
			
		});//end rootPanel
		
		Ext.Viewport.add(rootPanel);
	}//end launch
});