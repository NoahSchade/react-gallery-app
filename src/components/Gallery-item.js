import React from 'react';

const Galleryitem = (props) => {
  const imageItems = [];
  [props.data][0].map((image) => {
    return (
      imageItems.push(
        <li key={image.id}>
          <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt={props.subject.match(/\w+/)} />
        </li>
      )
    )
  });
  
  if(imageItems.length === 0){
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

export default Galleryitem;