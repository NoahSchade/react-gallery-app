import React from 'react';
import Galleryitem from './Gallery-item';
import Heading from './Heading';

const Gallery = (props) => {
  return (
    <div className="photo-container">
      <Heading subject={props.subject} />
      <ul>
        <Galleryitem data={props.data} subject={props.subject} />
      </ul>
    </div>
  );
}

export default Gallery;