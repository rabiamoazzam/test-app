import React from 'react';
import './wear.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {BsSnapchat} from 'react-icons/bs'
function Wear() {
    return ( 
        <div className='wear'>
            <div className='container'>
                <h1>WEAR</h1>
                <h1>WITHOUT WASTE</h1>
                <p>Easy on your wallet, and the planet</p>
                <button className='Btn'>EXPLORE NOW</button>
                <div>
                    <FaFacebook/>
                    <AiFillInstagram/>
                    <BsTwitter/>
                    <BsSnapchat/>
                </div>
            </div>
        </div>
     );
}

export default Wear;