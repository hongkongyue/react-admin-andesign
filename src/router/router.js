import React from 'react'
import{Router,Route,IndexRoute} from 'react-router'
import { Provider } from 'react-redux';
import store from '../redux/store'

//引入组件
    import Home from  '../page/echarts'
	import Demo1 from '../page'
	import Tabble from '../page/tabble'
	import Label from '../page/label'
	import Form from '../page/form'
	import Carousel from '../page/carousel'
	import ShopHome from '../page/shop/home'
	import HomeDetail from '../page/shop/home_detail'
	import Echarts from '../page/echarts'
	import WangEditor from '../page/wangeditor'
	import Select from '../page/select'
	import Input from '../page/input'
export default class routerMap extends React.Component{
	    // mixins: [ Lifecycle ]
	    updateHandle(){
            
		}
		componentDidMount(){
			console.log(store.getState(),'000000')
		}
        routerWillLeave(nextLocation){
		     console.log('当前路由是：',nextLocation)
        }
        render(){
        	   return(
					<Provider store={store}>
							 <Router onUpdate={this.updateHandle.bind(this)} history={this.props.history}>
									<Route   path='/' component={Demo1} >
											<IndexRoute  component={Home}/>
												<Route path='/tabble' component={Tabble}></Route>
												<Route path='/label' component={Label}></Route>
												<Route path='/form' component={Form}></Route>
												<Route path='/carousel' component={Carousel}></Route>
												<Route path='/shop_home' component={ShopHome}></Route>
												<Route path='/shop_home_detail' component={HomeDetail}></Route>
												<Route path='/echarts' component={Echarts}></Route>
												<Route path='/editor' component={WangEditor}></Route>
												<Route path='/select' component={Select}></Route>
											<Route path='/input' component={Input}></Route>
									</Route>
							</Router>
					   </Provider>
        	   	)
        }
}