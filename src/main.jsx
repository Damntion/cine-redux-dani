import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import Router from './components/routes/Router'
import './estilos/index.css'

import {store} from './store';

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>

)
