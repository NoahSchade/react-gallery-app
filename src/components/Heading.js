import React, { Component } from 'react';

class Heading extends Component {

  render(){
    return(
      <h2>{this.props.subject} Photos</h2>
    )
  }
}

export default Heading;