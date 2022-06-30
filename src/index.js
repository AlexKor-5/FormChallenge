import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { worker } from './mocks/browser'
import { submit } from './services/submit'

if (process.env.NODE_ENV === 'development') {
    worker.start({ onUnhandledRequest: 'bypass' }).then()
}

ReactDOM.render(
    <>
        {/*<React.StrictMode>*/}
        <BrowserRouter>
            <App submit={submit} />
        </BrowserRouter>
        {/*</React.StrictMode>*/}
    </>,
    document.querySelector('#root')
)
