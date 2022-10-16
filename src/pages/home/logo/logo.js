import React from 'react';
import './logo.css'
import { BiSearch } from "react-icons/bi";
import {BiUser} from 'react-icons/bi';
import {FaShoppingCart} from 'react-icons/fa'
function Logo() {
    return ( 
    <div className="Logo">
      <div className="image">
        <img
          src="https://images-platform.99static.com//h1wzDe5EuPVI3tzQyWTOOp4Ek1g=/246x44:1370x1168/fit-in/590x590/projects-files/142/14281/1428141/be73c785-a558-4d31-a65f-26988532ff7e.jpg"
          width="100%"
        ></img>
      </div>
      <div className="Links">
        <span>
          <ul>
            <li>
              <a className="active" href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Catalog</a>
            </li>
            <li>
              <a href="#">Items Conditions</a>
            </li>
            <li>
              <a href="#">Popular Brands</a>
            </li>
          </ul>
        </span>
      </div>
      <div className='icon'>
        <div><BiSearch size='1.5rem'/></div>
        <div><BiUser size='1.5rem'/></div>
        <div><FaShoppingCart size='1.5rem'/></div>
      </div>
    </div>
     );
}

export default Logo;