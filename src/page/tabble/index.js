import React from 'react';
import PropTypes from "prop-types"
import TabbleOne from './demo1'
import TabbleTwo from './demo2'
import TabbleThree from './demo3'

export default class TabbleAll extends React.Component {
    // 父组件声明自己支持 context
    static childContextTypes = {
        color:PropTypes.string,
        callback:PropTypes.func,
    }

    // 父组件提供一个函数，用来返回相应的 context 对象
    getChildContext(){
        return{
            color:"red",
            callback:this.callback.bind(this)
        }
    }
    callback(msg){
        console.log(msg);
    }


    render () {
        return (
            <div style={{width:'1200px',margin: 'auto',marginTop:50}}>
                <TabbleTwo title="哈哈哈，老爸"/>
                <p style={{marginTop:20}}></p>
                <TabbleOne callback ={ this.callback.bind(this) }/>
                <p style={{marginTop:20}}></p>
                <TabbleThree/>
            </div>
        )
    }
}
