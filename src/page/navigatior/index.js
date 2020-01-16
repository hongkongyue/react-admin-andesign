import React from 'react'
import {Link } from 'react-router'  //引入路由函数
import { Tag } from 'antd';
import store   from  '../../redux/store'

export default class  Navigator  extends React.Component {
    componentDidMount(){
          console.log('当前的是：', store.getState())
    }
    componentWilReciveProps(){
          console.log('更新的是：', store.getState())
    }
    log=(e)=>{
          console.log(e);
    }
    render(){
        return (
            <div style={{height:40+'px',lineHeight:40+'px',width:100+'%',background:'#fff',paddingLeft:'10px'}}>
                    <Tag style={{padding:'3px 15px'}}  color="green"  onClose={this.log}>
                       <Link to={'tabble'}>{'首页'}</Link>
                    </Tag>
                    <Tag style={{padding:'3px 15px'}}  closable color="green"     onClose={this.log}>{'员工个人档案'}</Tag>
                    <Tag style={{padding:'3px 15px'}}  closable color="green"     onClose={this.log}>{'员工个人档案'}</Tag>
                    <Tag style={{padding:'3px 15px'}}  closable color="green"     onClose={this.log}>{'员工个人档案'}</Tag>
                    <Tag style={{padding:'3px 15px'}}  closable color="green"     onClose={this.log}>
                        {'员工个人档案'}
                    </Tag>
            </div>
        )
    }
}