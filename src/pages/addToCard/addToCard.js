import React from 'react';
import {AiOutlineStar} from 'react-icons/ai'
import './addtocar.css'
const AddToCard = (props) => {
    const {image,title,price} = props
return (
    <div className='Card'>
        <div>
            <img src={image}/>
            <h6>{title}</h6>
            <div>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
            </div>
            <p>{price}</p>
            <button>1</button>
            <button className='Btn'>ADD TO CARD</button>
        </div>
    </div>
)
}
export default AddToCard;