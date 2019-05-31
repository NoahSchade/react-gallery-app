import React, { Component } from 'react';

class Heading extends Component {

  constructor(props){
    super(props);

    this.regexDash = /\//;
    this.replacementDash = '';

    this.regexSpace = /%20/g;
    this.replacementSpace = ' ';
  }

  render(){
    this.string = this.props.subject;
    this.reformatDash = this.string.replace(this.regexDash, this.replacementDash);
    this.reformatSpace = this.reformatDash.replace(this.regexSpace, this.replacementSpace);
    this.reformatedString = this.reformatSpace;
    return(
      <h2>{this.reformatedString} Photos</h2>
    )
  }
}

export default Heading;