import React, { Component } from 'react';

class Galleryitem extends Component {
  render(){
    const imageItems = [];
    [this.props.data][0].map((image) => {
      return (
        imageItems.push(
          image.farm !== 0 ? (
          <li key={image.id}>
            <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt={this.props.subject} />
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