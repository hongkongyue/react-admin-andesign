import React from 'react'   
import Froms from './from' 
export default class From extends React.Component{
              render(){
                      return(<span><Froms selectedRowKeys={this.props.selectedRowKeys} getNumCallback = {this.props.getNumCallback}/></span>)
              }
   }

