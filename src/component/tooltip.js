
/**
 * 全局公告
 */

import React from 'react';
import { Modal } from 'antd';

export default class App extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
        visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }
    render() {
        return (
        <div>
            <Modal
            title="本人公告"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            zIndex={100000000}
            >
            <p> https://github.com/Hi-Sen/React-Antd-demo-one.git</p>
            </Modal>
        </div>
        );
    }
}