import React from 'react';
import Galleryitem from './Gallery-item';
import Heading from './Heading';

const Gallery = (props) => {
  return (
    <div className="photo-container">
    {props.total > 0 || props.subject === "cat" || props.subject === "dog" || props.subject === "laptop" ? <Heading subject={props.subject} /> : ''}
      <ul>
        <Galleryitem data={props.data} total={props.total} subject={props.subject} />
      </ul>
    </div>
  );
}

export default Gallery;