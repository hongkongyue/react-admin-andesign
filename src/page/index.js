import React from 'react';

import {Layout} from 'antd';
import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import HeaderComponent from './header'
import FooterComponent from './footer'
import SiderComponent from './sider'
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
        console.log(nextProps);
       if(nextProps.routes[1].path=='/label'){
            this.setState({
                    name:'表格组件',
                    childname:'标签'
            })
       }else if(nextProps.routes[1].path=='/tabble'){
            this.setState({
                    name:'表格组件',
                    childname:'表格'
            })
       }else{
           this.setState({
                    name:'默认',
                    childname:'默认桌面'
           })
       }

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
            <div style={{width:100+'%'}}>
                <Layout>
                    <Header style={{height:40+'px',lineHeight:40+'px'}}>
                         <HeaderComponent/>
                    </Header>
                    <Layout>
                        <Sider style={{color:'#666',width:156}}>
                            <SiderComponent getValue={this.getValue.bind(this) } />
                        </Sider>
                        <Layout>
                                <Breadcrumb style={{width:'100%',height:'5.5vh',lineHeight:'5.5vh',textAlign:'left',marginLeft:'5%'}}>
                                   <Breadcrumb.Item><span style={{fontWeight:'bold',color:'#000'}}>{this.state.name}</span></Breadcrumb.Item>
                                   <Breadcrumb.Item><span>{this.state.childname}</span></Breadcrumb.Item>
                                 </Breadcrumb>
                                <Content style={{marginLeft:'5%',height:'86vh',paddingRight:'2%',overflow:'auto',textAlign:'center'}}>
                                    {this.props.children}
                                </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
