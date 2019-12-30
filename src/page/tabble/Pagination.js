import React from 'react'
import { Pagination} from 'antd';
export default class pagination extends React.Component{
	 constructor(props) {
        super(props);
        this.state = {
          data: props.data
        };
      } 
	render(){	   
		 return(
		 	   <div style={{marginTop:30,textAlign:'left'}}>
				 	   <Pagination current={this.props.pagination.current} 
				 	               pageSize={this.props.pagination.pageSize} 
				 	               pageSizeOptions={this.props.pagination.pageSizeOptions}
				 	               total={this.props.pagination.total}
				 	               showQuickJumper={this.props.pagination.showQuickJumper}
				 	               showSizeChanger={this.props.pagination.showSizeChanger} 
				 	               onShowSizeChange={this.props.pagination.onShowSizeChange}
				 	               onChange={this.props.pagination.onChange} 
				 	               showTotal={this.props.pagination.showTotal}
				 	               // onChange={this.props.onChange}
				 	    />			 	 
		      </div>
		      )
	}
}
