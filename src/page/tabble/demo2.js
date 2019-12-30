import React from 'react';
import { Table,Button,message} from 'antd';
import filter     from '../../filters';//已经验证，这是完全OK的；
import ModalTips     from './modal.js';
import Paging        from './Pagination'
var initData=[
                {id:120,name:'尚美饰品',        age:1541384217,address:'淮河路一号',honor:'优秀品牌'},
                {id:121,name:'星星饰品',        age:1541384217,address:'楚相大道190号',honor:'优秀品牌'},
                {id:122,name:'聚饰严选一号店',   age:1541384217,address:'河南路178号',honor:'优秀品牌'},
                {id:123,name:'大东东区',        age:1541384217,address:'河南信阳市189区',honor:'优秀品牌'},
                {id:124,name:'北京大区',        age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:125,name:'康美旗舰店',      age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:126,name:'乐视旗舰店',      age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:127,name:'海康威视店',      age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:128,name:'中国一曲',        age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:129,name:'运城大区',        age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:130,name:'我的小家伙一店',   age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:131,name:'中国的就是世界的',          age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:134,name:'通用别克集团有限公司',          age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:135,name:'长城汽车集团有限公司',          age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:136,name:'沃尔沃有限公司',               age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:137,name:'吉利汽车有限公司',    age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:138,name:'新光集团',      age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:139,name:'中国一拖',      age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:140,name:'上海一汽',      age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:141,name:'大众一汽',      age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:142,name:'德国梅赛斯奔驰有限公司',          age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:143,name:'宝马集团有限公司',          age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:144,name:'法拉利集团有限公司',          age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:145,name:'兰博基尼旗舰店',          age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:146,name:'凯迪拉克有限公司',    age:1541384217,address:'河南',honor:'优秀品牌'},
                {id:147,name:'福特集团有限公司',      age:1541384217,address:'河南',honor:'优秀品牌'}
             ]
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
          width:150
        },
         {
          title: `姓名`,
          dataIndex: 'name',
          width:150,
          render:(id,index)=>{
             return filter.normalString(index.name,4)
          }
        }, {
          title: `年龄`,
          dataIndex: 'age',
          width:150,
          render:(id,index)=>{
             return filter.normalTime(index.age)
          }
        }, {
          title: `地址`,
          dataIndex: 'address',
          width:150,        //设width的两种方法：一种的是直接的宽度不需要加px,另外一种是加'20%'的百分比；
        }, {
          title: '所获荣誉',
          dataIndex: 'honor',//要选定的data的名称，又学到了一点
          width:150
        },{
          title: '操作',
          dataIndex: 'operate',//要选定的data的名称，又学到了一点
          width:250,
          render: (id,index)=>(
                  <span>
                    <ModalTips data={index}/>
                    <Button type="danger" style={{marginLeft:20}} onClick={this.onDelete.bind(this,index)}>删除</Button>
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
        initData=JSON.parse(localStorage.getItem('data'))
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
        console.log(p)
        console.log(s)
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
    };
    const pagination={
                    current:this.state.page,
                    pageSize:this.state.pageSize,
                    pageSizeOptions:['10','20','30'],
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
              <Button type="primary" onClick={this.printState.bind(this)}>选中提交</Button>
              <Button style={{marginLeft:20}} type="primary" onClick={this.reset.bind(this)}>重置</Button>
              <Table  rowKey={record => record.id} rowSelection={rowSelection} columns={this.columns} dataSource={this.state.dataSource} pagination={false}/>
              <Paging pagination={pagination} onChange={this.renderagain.bind(this)}></Paging>
          </div>
    );
  }
}
 