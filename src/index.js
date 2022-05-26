import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { worker } from './mocks/browser'

/* eslint-disable */
if (process.env.NODE_ENV === 'development') {
    worker.start()
}
/* eslint-enable */

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('#root')
)
