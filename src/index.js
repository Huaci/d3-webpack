import React from 'react';
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router } from 'react-router-dom'
import appStore from './stores/appStore'
import  App from './components/App'
const stores = { appStore }

useStrict(true)
ReactDOM.render(
    <Provider {...stores}>
        <Router basename="/">
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)