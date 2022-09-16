import './ImageList.css';
import React from 'react';
import ImageCart from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCart key={image.id} image={image} />;
  });

  return <div className='image-list'>{images}</div>;
};

export default ImageList;
