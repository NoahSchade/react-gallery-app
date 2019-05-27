import React from 'react';
import Galleryitem from './Gallery-item';

const Gallery = (props) => {
  return (
    <div className="photo-container">
      <h2>{props.subject.match(/\w+/)} Images</h2>
      <ul>
        <Galleryitem data={props.data} subject={props.subject} evaluate={props.evaluate} counter={props.counter} />
      </ul>
    </div>
  );
}

export default Gallery;