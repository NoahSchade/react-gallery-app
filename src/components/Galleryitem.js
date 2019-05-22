import React from 'react';
import ImageList from '../data/images';

const Galleryitem = () => {
  const imageItems = [];
  ImageList.map((image) => {
    imageItems.push(
      <li key={image.id}>
        <img src={image.img_src} alt="" />
      </li>
    )
  });
  
  return imageItems;
}

export default Galleryitem;


