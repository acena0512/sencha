Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function(){
		var panel = new Ext.create('Ext.Panel')
		layout : {
			type : 'vbox'
		},
		items : [{
			flex : 3,
			xtype : 'button',
			text : '�ż���â',
			listeners : {
				tap : function(){
					Ext.msg,alert ('�޼�����','�޼��� ���â');
				}
			}
		},{
			flex : 1,
			xtype : 'spacer'
		},{
			flex : 3,
			xtype : 'button',
			text : '������Ʈâ',
			listeners : {
				top:function(){
					Ext. Msg.prompt('�Է�','�̸��� �Է��ϼ���',funcion(btn,text){
						console.log(btn.+" ; "text);
					})
				}
			},
			{
				flex :1,
				xtype : 'spacer'
			},{
				flex : 3,
				xtype : 'button',
				text : 'Ȯ��â',
				listeners : {
					tap : function(){
						Ext.Msg.confirm('Ȯ��','�۾��� ��� �Ͻðڽ��ϱ�?',function(btn){
							console.log(btn); 
						})
					}
				}
			
		}]
	});
Ext.Viewport.add(panel);
	}
});