
import React from 'react'  
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    return (
        <div style={{minHeight:'100px',background:'#fff',borderRadius:'10px',marginBottom:'20px'}}>
            <Form onSubmit={this.handleSubmit} layout="inline" >
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
                <FormItem ><Button  htmlType="submit" >查询</Button></FormItem>
            </Form>
        </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;