import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
    <div>
        <h2 style={{textAlign: 'center', margin: '2vw 0'}}>About NewsMonkey</h2>
        <p style={{textAlign: 'center', margin: '2vw 0'}} >
            NewsMonkey is a simple React application that provides the latest news from around the world. 
            Stay updated with current events, technology, sports, entertainment, and more.
        </p>
    </div>
    )
  }
}

export default About