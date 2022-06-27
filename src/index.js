import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { worker } from './mocks/browser'

if (process.env.NODE_ENV === 'development') {
    worker.start({ onUnhandledRequest: 'bypass' }).then()
}

ReactDOM.render(
    <>
        {/*<React.StrictMode>*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/*</React.StrictMode>*/}
    </>,
    document.querySelector('#root')
)
