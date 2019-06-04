import React, { Component } from 'react';
import loading from './loading.gif';

class Galleryitem extends Component {

  constructor() {
    super();

    this.state = {
      ready: false,
    };
  }

  handleOnLoad = () => {
    this.setState({
      ready: true
    });
  }

  render(){
    const imageItems = [];
    [this.props.data][0].map((image) => {
      return (
        imageItems.push(
          image.farm !== 0 ? (
          <li key={image.id}>
          
            <img 
              style={{
                display: this.state.ready ? 'block' : 'none'
              }}
              onLoad={this.handleOnLoad} 
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} 
              alt={this.props.subject} 
            />

            <img 
              style={{
                display: this.state.ready ? 'none' : 'block'
              }}
              src={loading} 
              alt="" 
            />

          </li>
          ) : '' 
        )
      )
    });
    
    if(this.props.total === 0 && this.props.subject !== "cat" && this.props.subject !== "dog" && this.props.subject !== "laptop"){
      imageItems.push(
        // Not Found
        <li key="Not Found" className="not-found">
          <h3>No Results Found</h3>
          <p>Your search did not return any results. Please try again.</p>
        </li>
      )
    };
    return imageItems;
  }
}

export default Galleryitem;