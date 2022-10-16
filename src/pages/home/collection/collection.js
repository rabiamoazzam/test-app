import React from 'react';
import './collection.css';
import Cardss from '../../cardss/cardss';

function Collection() {
    return ( 
        <div className='collection'>
            <div>
                <h1>OUR COLLECTION</h1>
            </div>
            <div className='CARD'>
                <div className='CARDSS'>
                    <h6>NEW ARRIVALS</h6>
                    <h2>TOUCH OF COLOR</h2>
                    <p>The Create Neck Style T-Shirt</p>
                    <button className='Btn'>SHOP NOW</button>
                </div>
                <Cardss image='https://res.cloudinary.com/looksthatwork/image/upload/f_auto,g_auto,w_540,h_680,c_fill,q_75/v1616491123/caesar-cut-men-hairstyles-02_fugm88.jpg' />
                <Cardss image='https://images.unsplash.com/photo-1606483956061-46a898dce538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80' />
                <Cardss image='https://ae01.alicdn.com/kf/HTB15LMoNXXXXXaAXFXXq6xXFXXXe.jpg_640x640Q90.jpg_.webp' />
                <Cardss image='https://m.media-amazon.com/images/S/aplus-media-library-service-media/be4452d7-7a00-4b6d-9b2d-8929c1e0962a.__CR0,0,300,300_PT0_SX300_V1___.jpg' />
                <Cardss image='https://store-media.mpowerpromo.com/5c7edfd8208c866f6f7c7fd0/pages/6192e3ceee87567c1a0a78ae/CustomTee-1637104591411.jpg' />   
            </div>
        </div>
     );
}

export default Collection;