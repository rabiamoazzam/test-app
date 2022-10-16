import React from 'react';
import './womensShirts.css'
import AddToCard from '../../addToCard/addToCard'
function WomensShirts() {
    return ( 
        <div className='WomensShirts'>
            <div className='shirtss'>    
                <h1>WOMENS ARRIVALS</h1>
            </div>    
            <div className='Card'>
                <AddToCard image='https://m.media-amazon.com/images/I/61Az9YWr+ZL._AC_UY580_.jpg' title='Printed T-shirt Gildan' price='$28'/>
                <AddToCard image='https://pngimg.com/uploads/dress/dress_PNG127.png' title='Orange Frock' price='$80'/>
                <AddToCard image='https://ae01.alicdn.com/kf/Hb86ba419cc084d2b84d2ddd03f615120O.jpg_640x640Q90.jpg_.webp' title='Thermal Sweatpants Women' price='$20'/>
                <AddToCard image='https://cdn.shopify.com/s/files/1/0589/7673/1323/products/unisex-essential-eco-hoodie-canyon-pink-front-6106a77f08fb5.png?v=1627826057' title='Embroidered Womens Hoodie' price='$55'/>
            </div>
            <button className='Btn'>VIEW MORE</button>
        </div>
     );
}

export default WomensShirts;