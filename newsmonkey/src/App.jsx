// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Loading from './components/Loading'


export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <>
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </>
      
    )
  }
}

export default App