import React from 'react'  
import { render } from 'react-dom'  
import { hashHistory } from 'react-router'  

import RouterPage from './router'  
  
render(  
    <RouterPage history = { hashHistory }/>,  
    document.getElementById('root')
)  