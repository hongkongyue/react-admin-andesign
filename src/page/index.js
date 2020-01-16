import React from 'react';
import store from '../redux/store'
import {Layout} from 'antd';

import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import HeaderComponent from './header'
import FooterComponent from './footer'
import SiderComponent from './sider'
import  Navigator     from './navigatior'
const { Header, Footer, Sider, Content  } = Layout;

export default class Demo1 extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            value   : '1',
            valueTxt: '',
            name    : '',
            childname:''
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(store.getState(),'9999')
        // store.dispatch()

    }
    getValue (val,value) {
        this.setState ({
            value: val,
            valueTxt: value, 
            // name: JSON.parse(localStorage.getItem('store')).name,
            // childname:JSON.parse(localStorage.getItem('store')).childname
        })
        console.log(val,value)
        console.log(value.props.to,'11111')
    }
    componentDidMount(){
       this.setState ({
            name: '表格组件',
            childname:'表格'
        })
    }
    render () {
        return (
            <div style={{width:100+'%',height:100+'%'}}>
                <Layout style={{height:100+'%'}}>
                    <Header style={{height:40+'px',lineHeight:40+'px'}}>
                         <HeaderComponent/>
                    </Header>
                    <Layout>
                        <Sider style={{color:'#666',width:146}}>
                            <SiderComponent getValue={this.getValue.bind(this) } />
                        </Sider>
                        <Layout>
                               <Navigator></Navigator>
                                <Content style={{padding:'0px  10px',height:'86vh',overflow:'auto',textAlign:'center'}}>
                                    {this.props.children}
                                </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
