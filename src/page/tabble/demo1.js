import React from 'react';
import { Table, Icon, Divider } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '措施',
    key: 'action',
    render: (text, record) => (
      <span>
        <a >Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a >Delete</a>
        <Divider type="vertical" />
        <a  className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
  }];

  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }, {
    key: '4',
    name: 'HACK name',
    age: 88,
    address: 'Xini,我的小宝贝，哈哈',
  }];


export default class TabbleDemo1 extends React.Component {
    constructor(props){
        super(props)
    }
    cb (msg) {
        return () => {
            this.props.callback(msg)
        }
    }
    render () {
        return (
            <div>
                <button onClick = { this.cb("我们通信把").bind(this) }>点击我</button>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
