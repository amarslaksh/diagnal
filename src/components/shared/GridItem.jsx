import React from 'react';
import Image from '../ui/Image'
import Title from '../ui/Title';

const GridItem = ({poster, title}) => (
    <div className='grid-item'>
        <Image src={poster} alt={title}/>
        <Title text={title} />
    </div>
)

export default React.memo(GridItem);