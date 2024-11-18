import React from 'react';

const Image = ({src, alt, width, height}) => (
    <img src={src} width={width} height={height} alt={alt} loading='lazy' className='grid-name'/>
)

export default Image;