import React from 'react';

const Galleryitem = (props) => {
  const imageItems = [];
  [props.data][0].map((image) => {
    return (
      imageItems.push(
        <li key={image.id}>
          <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt="image" />
        </li>
      )
    )
  });
  
  return imageItems;
}

export default Galleryitem;