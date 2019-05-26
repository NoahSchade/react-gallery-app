import React from 'react';
import Galleryitem from './Gallery-item';

const Gallery = (props) => {
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        <Galleryitem data={props.data} subject={props.subject} />
      </ul>
    </div>
  );
}

export default Gallery;