// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '/Users/HP/Desktop/reactBoy/newsmonkey/src/App.css'
import { Link } from 'react-router-dom'


export class Navbar extends Component {

  render() {
    return (
      <div className='navbar'>
        <Link to='/'><h1>NewsMonkey</h1></Link>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </ul>
      </div>
    )
  }
}

export default Navbar