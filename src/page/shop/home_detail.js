import React from 'react';
import './home.css'
import axios from '../../http';
import myFetch from '../../fetch';
export default class TabbleAll extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
    }

    render() {
        return (
            <div className="homeSty">
                {/*
                    度娘过来的方法， 接口返回一段HTML文本，渲染成HTML页面
                    https://www.cnblogs.com/hai-cheng/p/9264638.html    笔记
                */}
                <div dangerouslySetInnerHTML={{ __html: this.state.content.FullDescription }} ></div>
            </div>
        )
    }

    componentDidMount() {
        let id = document.location.hash.split('=')[1];
        this.getDetail(id)
    }

    // 详情方法
    getDetail(id) {
        let params = {
            "ID": id,
            "SeckillPointPrice": 0
        }
        axios.post('/eop/productlaunch/developPhotoReportManage/selectPage', params).then(res => {
            this.setState({
                content: res.Data,
            })
            console.log(res)
        }).catch(err => {
            console.log(`${err}`)
        })
    }
}
