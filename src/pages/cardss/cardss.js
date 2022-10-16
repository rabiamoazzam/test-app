import React from 'react';
const Cardss = (props) => {
    const {image} = props
    return ( 
        <div className='CollectionImages'>
            <img src={image} width='100%'/>
        </div>
     );
}
export default Cardss;