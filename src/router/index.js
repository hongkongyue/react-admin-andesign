import React from 'react'  
import { render } from 'react-dom'  
import { hashHistory ,browserHistory} from 'react-router'  

import RouterPage from './router'  
  
render(  
    <RouterPage history = {browserHistory}/>,  
    document.getElementById('root')
)  