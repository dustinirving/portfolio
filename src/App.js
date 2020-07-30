import React from 'react'
import './App.css'
import Home from './pages/Home'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className='App'>
        <Home />
      </div>
    </Router>
  )
}

export default App
