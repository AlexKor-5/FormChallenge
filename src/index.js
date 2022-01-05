import React from 'react'
import ReactDOM from 'react-dom'
import { MyApp } from './components/MyApp/MyApp'

ReactDOM.render(
    <React.StrictMode>
        <h1>Hello</h1>
        <MyApp />
    </React.StrictMode>,
    document.querySelector('#root')
)
