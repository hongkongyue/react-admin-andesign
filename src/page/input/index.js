import React from 'react'
import { Button } from 'antd';
import { AutoComplete } from 'antd';

export default class Complete extends React.Component {
  state = {
    dataSource: [],
  }
  onSelect=(value)=>{
  	 this.setState({
  	 	    value:value
  	 })
  }
  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
      value:value
    });
  }
  handleChange=()=>{
  	         alert(this.state.value)
  }
  render() {
        const {dataSource} = this.state;
    return (
	      <div style={{marginTop: 10}}>
			      <AutoComplete
				        dataSource={dataSource}
				        style={{ width: 200 }}
				        onSelect={this.onSelect}
				        onSearch={this.handleSearch}
				        placeholder="请输入内容…"
			      />
			       <Button style={{marginLeft:10}} type="primary" icon="search" onClick={this.handleChange}>搜索</Button>
	      </div>
    );
  }
}