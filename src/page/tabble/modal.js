import React from 'react'
import PropTypes from "prop-types"
import { Modal, Button } from 'antd';

class ModalTips extends React.Component {
   // constructor(props){
   // 	   super(props)
   // }
   static contextTypes = {
              color:PropTypes.string,
              callback:PropTypes.func,
   }
  state = {
          ModalText: 'Content of the modal',
          visible: false,
          confirmLoading: false,
  }
  componentDidMount(){
    
  	 this.setState({
  	 	          ModalText:this.props.data.name,
  	 	          address  :this.props.data.address
  	 })
     this.cb(this.state)

  }
  showModal = () => {
    this.setState({
      visible: true,
    });
     console.log(this.state)
  }

  handleOk = () => {
    this.setState({
        ModalText:this.props.data.name,
  	    address  :this.props.data.address,
        confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  cb (msg) {
            return () => {
                this.context.callback(msg);
            }
        }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, confirmLoading, ModalText,address} = this.state;
    const style = { color:this.context.color }
    const cb = (msg) => {
            return () => {
                this.context.callback(msg);
            }
        }
    return (
      <span>
        
        <Button type="primary" onClick={this.showModal}>编辑</Button>
        <Modal title="编辑模块"visible={visible} onOk={this.handleOk}confirmLoading={confirmLoading}onCancel={this.handleCancel}>
            <p>{ModalText}</p>
            <p>{address}</p>
             <div style = { style }>
                SUBSUB
                <button onClick = { cb(this.state) }>点击我</button>
             </div>
        </Modal>
      </span>
    );
  }
}
export default ModalTips;
