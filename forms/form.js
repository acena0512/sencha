Ext.application({
	launch : function(){
		
		var date = new Date();
		Ext.Date.monthNames = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
	
		Ext.define('genderModel',{
			extend :'Ext.data.Model',
			config : {
				fields : [{
					name : 'indexNumber', type : 'string'
				},{
					name : 'title', type : 'string'
				}]
			}
		});
		var genderStore = new Ext.create('Ext.data.Store',{
			model : 'genderModel',
			data : [{
				indexNumber : '1', title : '남'
			},{
				indexNumber : '2', title : '여'
			}]
		});
		
		var formPanel = new Ext.create('Ext.form.FormPanel',{
			fullscreen : true,
			items : [{
				xtype : 'fieldset',
				title : '입사지원서',
				defaults : {
					required : true,
					labelAlign : 'left'
				},
				items : [{
					xtype : 'textfield',
					name : 'name',
					label : '이름',
					clearIcon : true
				},{
					xtype : 'datepickerfield',
					name : 'birthday',
					label : '생년월일',
					//dateFormat : 'y/m/d',
					//placeHolder:'yyyy/mm/dd',
					value: date,
					dateFormat : 'Y/m/d',
					
					picker:{
						//yearFrom: 1950,
						useTitles : true,
						dayText : '일',
						monthText : '월',
						yearText : '년',
						slotOrder : ['year', 'month','day']
					},{
						xtype : 'checkboxfield',
						name : 'mili',
						label : '군필여부',
						checked : true
					},{
						xtype : 'spinnerfield',
						name : 'career',
						label : '경력',
						minValue : 0,
						maxValue :100,
						increment : 1,
						value :10
						
					},{
						layout : {
							type : 'hbox'
						},
						width :'100%',
						items :[{
							xtype : 'selectfield',
							name : 'gender',
							label : '성별',
							store : genderStore
						},{
							 xtype : 'numberfield',
							 name : 'age',
							 label : '나이',
							 value : 22
							
						}]
						
					},{
						xtype : 'emailfield',
						name : 'email',
						label : '이메일',
						placeHolder : 'test@test.com',
						clearIcon : true
					},{
						xtype : 'urlfield',
						name : 'url',
						label : '홈페이지'
					},{
						 
						xtype : 'sliderfiled',
						name : 'pay',
						label : '희망연봉'
						value : 50,
						max : 100
					
					
				},{
					layout : {
						type : 'hbox',
						pack : 'center'
					},
					items : [{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '등록',
						handler : function(){
							//console.log(Ext.ComponentQuery.query('name')[0]);
							var loadValues = formPanel.getValues();
							var name = loadValues.name;
							console.log(loadValues.name);
						}
					},{
						xtype : 'spacer',
						width : 10
					},{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '취소',
						handler : function(){
							formPanel.reset();
						}
					}]
				}] // end fieldset items
				}
			}]//end formPanel items
		}); //end formPanel
	}//end launch funciton 
});