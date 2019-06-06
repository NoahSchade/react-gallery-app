import React from 'react';
import SearchGalleryItems from './SearchGalleryItems';
import Heading from './Heading';

const Gallery = (props) => {
  return (
    <div className="photo-container">
    {props.total > 0 || props.subject === "cat" || props.subject === "dog" || props.subject === "laptop" ? <Heading subject={props.subject} /> : ''}
      <ul>
        <SearchGalleryItems data={props.data} total={props.total} subject={props.subject} />
      </ul>
    </div>
  );
}

export default Gallery;