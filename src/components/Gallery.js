import React from 'react';
import Galleryitem from './Galleryitem';

const Gallery = (props) => {
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        <Galleryitem />
      </ul>
    </div>
  );
}

export default Gallery;