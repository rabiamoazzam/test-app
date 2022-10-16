import React from 'react';
import './menShirts.css'
import AddToCard from '../../addToCard/addToCard'
function MenShirts () {
    return ( 
        <div className='MenShirt'>
            <div className='shirtss'>    
                <h1>MENS ARRIVALS</h1>
            </div>    
            <div className='Card'>
                <AddToCard image='https://becky.ee/wp-content/uploads/2019/11/Projob-t-s%C3%A4rk-tumesinine.jpg' title='T-shirt Navy Blue Polo' price='$28'/>
                <AddToCard image='https://www.pngall.com/wp-content/uploads/2016/04/Jeans-PNG-Image.png' title='Ripped Blue Jeans' price='$80'/>
                <AddToCard image='https://pngimg.com/uploads/tshirt/tshirt_PNG5448.png' title='T-shirt Grey Polo' price='$20'/>
                <AddToCard image='https://i.etsystatic.com/16835241/r/il/11b66f/1764077373/il_794xN.1764077373_7hi1.jpg' title='T-shirt Hoodie Pierogi Clothing' price='$55'/>
            </div>
            <button className='Btn'>VIEW MORE</button>
        </div>
     );
}

export default MenShirts;