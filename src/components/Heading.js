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
    this.reformateDash = this.string.replace(this.regexDash, this.replacementDash);
    this.reformateSpace = this.reformateDash.replace(this.regexSpace, this.replacementSpace);
    this.reformatedString = this.reformateSpace;
    return(
      <h2>{this.reformatedString} Images</h2>
    )
  }
}

export default Heading;