const menuList =[
                        {id:10,type:'wechat',title:'表格组件',children:[
                              {id:11,name:'tabble',title:'表格',children:[]},
                              {id:12,name:'label',title:'标签页',children:[]}, 
                              {id:13,name:'',title:'三级标题',children:[
                                 {id:14,name:'select',title:'上传',children:[]},
                                 {id:15,name:'input',title:'表单输入',children:[]}
                              ]}
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
export default menuList;
{/* <SubMenu key="sub1" title={<span><Icon type="frown" /><span>表格组件</span></span>}>
								<Menu.Item key="1">
									<Link to = {'tabble'}>表格</Link>
								</Menu.Item>
								<Menu.Item key="2">
									<Link to = {'label'}>标签页</Link>
								</Menu.Item>、
						</SubMenu>
                        <SubMenu key="sub10" title={<span><Icon type="frown" /><span>表单轮播</span></span>}>
								<Menu.Item key="3">
										<Link to = {'form'}>表单</Link>
								</Menu.Item>
								<Menu.Item key="4">
										<Link to = {'carousel'}>轮播图</Link>
								</Menu.Item>
					    </SubMenu>
						<SubMenu key="sub2" title={<span><Icon type="frown" /><span>网络请求</span></span>}>
							    <Menu.Item key="5">
								        <Link to = {'shop_home'}>获取商品列表</Link>
							    </Menu.Item>
						</SubMenu>
						<SubMenu key="sub3" title={<span><Icon type="meh-o" /><span>组件图表</span></span>}>
							<Menu.Item key="6">
								<Link to = {'echarts'}>部分类型图表</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="sub4" title={<span><Icon type="meh" /><span>富文本编辑</span></span>}>
							<Menu.Item key="7">
								<Link to = {'editor'}>Editor</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="sub5" title={<span><Icon type="frown-o" /><span>图片上传</span></span>}>
							<Menu.Item key="8">
								<Link to = {'select'}>上传图片</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu key="sub6" title={<span><Icon type="frown" /><span>redux 状态管理</span></span>}>
							<Menu.Item key="9"> <Link to = {'redux'}>Redux</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="sub7" title={<span><Icon type="frown" /><span>自己练习</span></span>}>
							<Menu.Item key="10">
							<Link to = {'input'}>表格练习</Link>
							</Menu.Item>
						</SubMenu> */}