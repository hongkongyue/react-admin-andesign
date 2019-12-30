import React from 'react'
import{Router,Route,IndexRoute} from 'react-router'
// import { Lifecycle } from 'react-router'

import '../config/globalConfig.js'
// 引入组件

import Demo1 from '../page'
import Nav from './nav'
import Tabble from '../page/tabble'
import Label from '../page/label'
import Form from '../page/form'
import Carousel from '../page/carousel'
import ShopHome from '../page/shop/home'
import HomeDetail from '../page/shop/home_detail'
import Echarts from '../page/echarts'
import WangEditor from '../page/wangeditor'
import Select from '../page/select'
import Redux from '../page/redux'
import Input from '../page/input'

// 生成组件路由

export default class routerMap extends React.Component{
	    // mixins: [ Lifecycle ]
	    updateHandle(){

        		Nav()
        		// console.log(this.props.location.pathname)
        }
        // routerWillLeave(nextLocation){
        // 	console.log(nextLocation)
        // }
        render(){
			   // Nav()
        	   return(
	        	   	<Router onUpdate={this.updateHandle.bind(this)} history={this.props.history}>
	        	   		    <Route      path='/'       component={Demo1}>
		        	   		        <IndexRoute  component={Tabble}/>
			        	   		    <Route path='/tabble' component={Tabble}></Route>
				                    <Route path='/label' component={Label}></Route>
				                    <Route path='/form' component={Form}></Route>
				                    <Route path='/carousel' component={Carousel}></Route>
				                    <Route path='/shop_home' component={ShopHome}></Route>
				                    <Route path='/shop_home_detail' component={HomeDetail}></Route>
				                    <Route path='/echarts' component={Echarts}></Route>
				                    <Route path='/editor' component={WangEditor}></Route>
				                    <Route path='/select' component={Select}></Route>
				                    <Route path='/redux' component={Redux}></Route>
				                    <Route path='/input' component={Input}></Route>
		        	   		</Route>
	        	   	</Router>
        	   	)
        }
}