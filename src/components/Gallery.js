import React from 'react';
import Galleryitem from './Gallery-item';
import Heading from './Heading';

const Gallery = (props) => {
  return (
    <div className="photo-container">
      {props.data.length > 0 && props.counterTwo >= 1 ? <Heading subject={props.subject} /> : null}
      {props.counterOne >= 4 && props.counterTwo >= 1 ? props.reset() : null}
      {console.log(props.counterTwo)}
      <ul>
        <Galleryitem data={props.data} subject={props.subject} incrementOne={props.incrementOne} counterOne={props.counterOne} reset={props.reset} />
      </ul>
    </div>
  );
}

export default Gallery;