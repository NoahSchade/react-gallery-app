import React, { Component } from 'react';

class Heading extends Component {
  render(){
    return(
      <h2>{this.props.subject.match(/\w+/)} Images</h2>
    )
  }
}

export default Heading;