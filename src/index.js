// React
import React from 'react'
import ReactDOM from 'react-dom'
// component
import App from './App'
// route
import { BrowserRouter} from "react-router-dom"

ReactDOM.render(
    (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ),
    document.getElementById('root')
);    