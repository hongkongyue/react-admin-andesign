export  default function menuList (){
               return [
                        {id:10,type:'wechat',title:'表格组件',children:[
                              {id:11,name:'tabble',title:'表格',children:[]},
                              {id:12,name:'label',title:'标签页',children:[]}, 
                            ]
                        },
                        {
                        id:20,type:'dingding',title:'表单轮播',
                        children:[
                              {id:21,name:'form',title:'表单',      children:[]},
                              {id:22,name:'carousel',title:'轮播图',children:[]},
                        ]
                       },
                       {id:30,type:'qq',title:'网络请求',
                        children:[
                        {id:31,name:'shop_home',title:'获取商品列表',children:[]},
                        ]
                       },
                       {id:40,type:'alipay',title:'组件图表',children:[
                          {id:41,name:'echarts',title:'部分类型图表',children:[]},
                       ]
                       },
                    ]
          }
// export default function menuList2(){
//                return  [
//                   {
//                       menuId: 1,
//                       name: '员工管理',
//                       children: [
//                           {
//                               menuId: 3,
//                               name: '添加员工',
//                               children: []
//                           },
//                           {
//                               menuId: 4,
//                               name: '删除员工',
//                               children: [
//                                   {
//                                       menuId: 6,
//                                       name: '按姓名删除',
//                                       children: []
//                                   },
//                                   {
//                                       menuId: 7,
//                                       name: '按工号删除',
//                                       children: []
//                                   }
//                               ]
//                           }
//                       ],
//                   },
//                   {
//                       menuId: 2,
//                       name: '工资管理',
//                       children: [
//                           {
//                               menuId: 5,
//                               name: '修改工资',
//                               children: []
//                           }
//                       ],
//                   },
//               ];
// }