import React from 'react'  
import CarouselOne from './demo1' 
import CarouselTwo from './demo2' 
import CarouselThree from './demo3' 

export default class From extends React.Component {
    render () {
        return (
            <div style={{width:'800px',margin: 'auto',marginTop:50}}>   
                <CarouselOne/> 
                <hr/>
                <CarouselTwo/>
                <hr/>
                <CarouselThree/>
            </div>
        )
    }
}
