import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import './_base.scss'
import App from './App.jsx'
import store from './redux/store/store.jsx'
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <Provider store={store}>
    <Router>
      <App />
    </Router> 
  </Provider>
);

