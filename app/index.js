import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './scripts/components/App'

import store from './scripts/store'
import './styles/index.scss'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);