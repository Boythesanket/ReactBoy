
import React, { Component } from 'react'

export class Loading extends Component {
  static propTypes = {}

  render() {
    return (
        <>

        <div className="loading"
        style={{textAlign: 'center'}}
        >
            <img width={40} src="https://media.tenor.com/WX_LDjYUrMsAAAAi/loading.gif" alt="" />
        </div>
            
        </>

    );
  }
}

export default Loading