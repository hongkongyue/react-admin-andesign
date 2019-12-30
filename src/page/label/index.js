import React from 'react';
import TabbleOne from './demo1'
import TabbleTwo from './demo2'
import TabbleThree from './demo3'

export default class TabbleAll extends React.Component {
    render () {
        return (
            <div style={{width:'1200px',height:'auto',margin: 'auto',marginTop:50}}>
                <TabbleOne/>
                <hr/>
                <TabbleTwo/>
                <hr/>
                <TabbleThree/>
            </div>
        )
    }
}
