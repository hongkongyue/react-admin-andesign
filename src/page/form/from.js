
import React from 'react'  
import { Form, Input, Tooltip, Icon, message, Button} from 'antd';
const FormItem = Form.Item;
class RegistrationForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      formSearch:{},
    };
  }
  
  reset=()=>{
           this.props.form.resetFields();
           this.setState({
                         formSearch:{}
           })
  }
  handleSubmit = (e) => {
                this.setState({
                            formSearch:this.props.form.getFieldsValue()
                })
                setTimeout(()=>{
                  this.props.getNumCallback(this.props.form.getFieldsValue())
                })
  }
 del=()=>{
        if(this.props.selectedRowKeys.length==0) return  message.error('请选择要删除的数据')
 }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    setTimeout(()=>{
      console.log(this.state.formSearch,'989898')
 })
    return (
        <div style={{minHeight:'100px',background:'#fff',borderRadius:'10px',marginBottom:'20px'}}>
            <Form  layout="inline" >
                <FormItem  label="邮箱："
                >
                {getFieldDecorator('email', {
                    rules: [ {
                    required: true, message: '请输入邮箱',
                    }],
                })(
                    <Input />
                )}
                </FormItem>
                <FormItem
                label="密码："
                >
                {getFieldDecorator('password', {
                    rules: [{
                    required: true, message: '请输入有效的密码',
                    }],
                })(
                    <Input type="text" />
                )}
                </FormItem>
                <FormItem
                label="大货款号："
                >
                {getFieldDecorator('goodNos', {
                    rules: [{
                    required: true, message: '请输入大货款号！',
                    }],
                })(
                    <Input type="text" onBlur={this.handleConfirmBlur} />
                )}
                </FormItem>
                <FormItem ><Button   type="primary" onClick={this.handleSubmit} >查询</Button></FormItem>
                <FormItem ><Button   type="primary" onClick={this.del}>删除</Button></FormItem>
                <FormItem ><Button  onClick={this.reset}>重置</Button></FormItem>
            </Form>
        </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;