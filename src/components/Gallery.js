import React from 'react';
import DefaultGalleryItems from './DefaultGalleryItems';
import SearchGalleryItems from './SearchGalleryItems';
import Heading from './Heading';

const Gallery = (props) => {
  return (
    <div className="photo-container">
    {props.total > 0 ? <Heading subject={props.subject} /> : ''}
      <ul>
        { props.subject === "Cat" || props.subject === "Dog" || props.subject === "Laptop" ? <DefaultGalleryItems data={props.data} total={props.total} subject={props.subject} /> : <SearchGalleryItems data={props.data} total={props.total} subject={props.subject} /> }
      </ul>
    </div>
  );
}

export default Gallery;