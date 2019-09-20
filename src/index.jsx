import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()
