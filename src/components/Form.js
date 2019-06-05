import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Form extends Component {

  constructor(props) {
    super(props);

    this.regexPercent = /%20/g;
    this.replacementSpace = ' ';

    this.regexSpecial = /[^a-zA-Z0-9-' ']/g;
    this.replacementBlank = '';

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let path = this.state.value;
    this.pathReformatPercent = path.replace(this.regexPercent, this.replacementSpace);
    this.pathReformatted = this.pathReformatPercent.replace(this.regexSpecial, this.replacementBlank);
    
    this.hashPercent = window.location.hash.replace(this.regexPercent, this.replacementSpace);
    this.hashPath = this.hashPercent.replace(this.regexSpecial, this.replacementBlank);

    this.props.searchButtonActivate();

    if(this.pathReformatted !== this.hashPath){
      this.props.history.push(this.pathReformatted);
    }
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="search" name="search" placeholder="Search" value={this.state.value} onChange={this.handleChange} required/>
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>
    );
  }
}

export default withRouter(Form)