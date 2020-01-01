export default function menuList (){
               return [
                        {id:10,name:'/',type:'wechat',title:'表格组件',children:[
                            {id:11,name:'tabble',title:'表格',children:[]},
                            {id:12,name:'label',title:'标签页',children:[]}   
                        ]},
                        {
                        id:20,name:'/',type:'dingding',title:'表单轮播',
                        children:[
                         {id:21,name:'form',title:'表单',children:[]},
                         {id:22,name:'carousel',title:'轮播图',children:[]}   
                        ]
                       },
                       {id:30,name:'/',type:'qq',title:'网络请求',
                        children:[
                        {id:31,name:'shop_home',title:'获取商品列表',children:[]},
                        ]
                       },
                       {id:40,name:'/',type:'alipay',title:'组件图表',children:[
                          {id:41,name:'echarts',title:'部分类型图表',children:[]},
                       ]
                       },
     ]
}