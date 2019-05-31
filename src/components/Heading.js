import React, { Component } from 'react';

class Heading extends Component {

  constructor(props){
    super(props);
    this.string = this.props.subject;
    this.regex = /([a-zA-Z\s])+/;
    this.replacement = '$1';
  }

  render(){
    return(
      
      <h2>{this.string.replace(this.regex, this.replacement)} Images</h2>
    )
  }
}

export default Heading;