import React from 'react';
import {Link } from 'react-router'  //引入路由函数
import menuList from './mock/menu.js'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;



export default class Sider extends React.Component {
	constructor (props) {
		 super(props)
		 this.state={
		         	menuList:[]
		 }
	}
    handleClick = (e) => {
	}
    render () {
				return (
						 <Menu theme='dark' onClick={this.handleClick} onChange = {this.getValue} style={{height:'93.2vh',overflowY:'hidden'}} mode="inline">
                         </Menu>
				);
			}
	 }
// 	 <Menu theme='dark' onClick={this.handleClick} onChange = {this.getValue} style={{height:'93.2vh',overflowY:'hidden'}} mode="inline">
// 	 {
// 		 menuList.map(index=>{
// 			 <SubMenu key={index.name}  title={<span> <Icon type={index.type} /> <span>{index.title}</span></span>}>
// 				{
// 					 index.children.map(k=>{
// 						   return (<Menu.Item key={k.name}>{k.title}</Menu.Item>)
// 					 })
// 				}
// 			</SubMenu>
// 		 })
// 	 } 
//  </Menu>
	 
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