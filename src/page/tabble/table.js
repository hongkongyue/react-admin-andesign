import React from 'react';
import { Table,Button,message} from 'antd';
import filter     from '../../filters';//已经验证，这是完全OK的；
import ModalTips     from './modal.js';
import './table.css'
// import Paging        from './Pagination'
import initData from './data'
 console.log(initData,'99999')
localStorage.setItem('data',JSON.stringify(initData))
export default class App extends React.Component{
  constructor(props){
         super(props)
         this.onChange=this.onChange.bind(this)
         this.state={
                    dataSource:[],
                    selectedRowKeys:[],
                    page:1,
                    pageSize:20
           }
         this.columns = [
         {
          title: `ID`,
          dataIndex: 'id',
          width:70,
          align:'center'
          },
         {
          title: `姓名`,
          dataIndex: 'name',
          minWidth:50,
          align:'center',
          ellipsis:true,
          // render:(id,index)=>{
          //    return filter.normalString(index.name,4)
          // }
        }, {
          title: `年龄`,
          dataIndex: 'age',
          minWidth:150,
          align:'center',
          render:(id,index)=>{
             return filter.normalTime(index.age)
          }
        }, {
          title: `地址`,
          dataIndex: 'address',
          minWidth:50,
          ellipsis:true,
          align:'center',
        }, {
          title: '所获荣誉',
          dataIndex: 'honor',//要选定的data的名称，又学到了一点
          minWidth:150,
          align:'center',
        },
        {
          title: '所获荣誉',
          dataIndex: 'honors',//要选定的data的名称，又学到了一点
          minWidth:150,
          align:'center',
        },
        {
          title: '操作',
          dataIndex: 'operate',//要选定的data的名称，又学到了一点
          width:250,
          fixed:'right',
          align:'center',
          render: (id,index)=>(
                  <span>
                    <ModalTips data={index}/>
                    <Button type="danger" style={{marginLeft:20}} onClick={this.onDelete.bind(this,index)} size="small">删除</Button>
                  </span>
            )
         }]
        }
  onDelete(obj){
                var index=this.getIndex(initData,obj.key);
                    console.log(initData.splice(index,1))
                console.log(`删除的是：`+initData.splice(index,1))
                   this.setState({
                         dataSource:initData
                   })
                   console.log(initData)
  }
  getIndex(arr,key){
          if(arr.length>0){
             for(let i=0;i<arr.length;i++){
                  if(arr[i].key===key)return i
             }
             return -1
          }
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({selectedRowKeys});
  }
  componentDidMount(){
              console.log(this.props.title)
              this.setState({
                           dataSource:initData,
              })
  }
  printState(){
            if(this.state.selectedRowKeys.length===0){
                 message.destroy();
                 message.loading('不能为空', 2.5)
            }else{
                 console.log(this.state.selectedRowKeys)
                 message.destroy();
                 message.success('提交成功', 2.5)
            }

  }
  reset(){
       const  initData=JSON.parse(localStorage.getItem('data'))
        this.setState({
                      dataSource:initData,
         })
  }
  onChange(pageNumber,pagesize) {
                     console.log(pagesize);
                     console.log(pageNumber)
                     this.setState({
                            page:pageNumber,
                            pageSize:pagesize
                      })
  }
  renderagain(p,s){
        this.setState({
                            page:p,
                            pageSize:s,
                            dataSource:initData,
         })
  }
  render(){
    console.log('重新渲染')
    const {selectedRowKeys} = this.state;
    const rowSelection = {
                        selectedRowKeys,
                        onChange: this.onSelectChange,
                        hideDefaultSelections: true,
                        onSelection: this.onSelection,
                        columnWidth:'50px',
                        fixed:'left'
    };
    const pagination={
                    current:this.state.page,
                    pageSize:this.state.pageSize,
                    pageSizeOptions:['10','20','30','40'],
                    total:initData.length, 
                    onChange:this.onChange,
                    showQuickJumper:true,
                    showSizeChanger:true,
                    onShowSizeChange:(p,s)=>{
                       this.renderagain(p,s)
                    },
                    showTotal:function(total,range){  
                             return `共${total}条数据`
                    }
    }
    return (
          <div>
              <Table bordered rowKey={record => record.id} rowSelection={rowSelection} columns={this.columns} scroll={{x: 1500, y: 500 }} dataSource={this.state.dataSource} pagination={false}/>
          </div>
    );
  }
}
 