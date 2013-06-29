Ext.application({
		requires : ['Ext.MessageBox'],
	launch  function(){
		// ������
		Ext.define('company',{
			extend : 'Ext.data.Model',
			config : {
				fields : ['drade','ban','name']
			}
		});
		
		var companyStore = Ext.create('Ext.data.Store',{
			model : 'company',
			sorters :'ban',
			data : [{
				grade : '1', ban :'1', name : 'ȫ�浿1'
			},{
				grade : '2', ban :'2', name : 'ȫ�浿2'
			},{
				grade : '1', ban :'1', name : 'ȫ�浿3'
			},{
				grade : '1', ban :'1', name : 'ȫ�浿4'
			},{
				grade : '1', ban :'1', name : 'ȫ�浿5'
			},{
				grade : '1', ban :'1', name : 'ȫ�浿6'
			}],
			grouper : {
				groupFn : function(record){
					return record.get('ban')[0] + '��';
				}
			}
		});
		
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			layout : {
				type :'vbox',
				align : 'stretch'
			},
			items : [{
				xtype : 'list',
				flex : 1,
				store : companyStore,//�����͸� �����Ѱ�
				itemTpl : '{grade}�г� {ban}�� �̸� :{name}',//store�� ����� �����͸� ǥ���ϴ� ���
				grouped : true,
				indexBar : true,
				onItemDisclosure : true,
				listeners : {
					itemtap : function ( dataList , index, target, record,e,eOpts){
						Ext.Msg.alert('Title',recode.get('grade')+'�г� '+
								recode.get('ban')+'�� �̸�:'+ recode.get('name'));
					}
				}
			}]
		});
	}
});