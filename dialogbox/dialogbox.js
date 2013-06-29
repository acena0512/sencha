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
			text : '매세지창',
			listeners : {
				tap : function(){
					Ext.msg,alert ('메세제ㅣ','메세지 출력창');
				}
			}
		},{
			flex : 1,
			xtype : 'spacer'
		},{
			flex : 3,
			xtype : 'button',
			text : '프롬프트창',
			listeners : {
				top:function(){
					Ext. Msg.prompt('입력','이름을 입력하세요',funcion(btn,text){
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
				text : '확인창',
				listeners : {
					tap : function(){
						Ext.Msg.confirm('확인','작업을 계속 하시겠습니까?',function(btn){
							console.log(btn); 
						})
					}
				}
			
		}]
	});
Ext.Viewport.add(panel);
	}
});