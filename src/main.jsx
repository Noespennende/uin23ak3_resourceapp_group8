import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './styles/main.scss'
import { BrowserRouter as Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Route>
      <App />
    </Route>
  </React.StrictMode>,
  
)
