import React from 'react';
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaSnapchatGhost} from 'react-icons/fa'
function Footer() {
    return ( 
        <div className='Footer'>
            <div className='footer-body'>
                <div className='detail'>
                    <div className="image">
                    <img src="https://images-platform.99static.com//h1wzDe5EuPVI3tzQyWTOOp4Ek1g=/246x44:1370x1168/fit-in/590x590/projects-files/142/14281/1428141/be73c785-a558-4d31-a65f-26988532ff7e.jpg" width="8%"></img>
                    </div>
                    <p>Share contact information, store details, and brand content with your customers</p>
                    <span>
                        <BsFacebook size='2rem'/>
                        <AiOutlineInstagram size='2rem'/>
                        <AiFillTwitterCircle size='2rem ' color='red'/>
                        <FaSnapchatGhost size='2rem'/>
                    </span>
                </div>
                <div className='Useful-Links'>
                    <h5>Useful Links</h5>
                    <ul>
                        <li>
                            <a href='#'>About us</a>
                        </li>
                        <li>
                            <a href='#'>Items Conditions</a>
                        </li>
                        <li>
                            <a href='#'>Contact Us</a>
                        </li>
                        <li>
                            <a href='#'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='#'>Terms and Conditions</a>
                        </li>
                        <li>
                            <a href='#'>Shipping Policy</a>
                        </li>
                        <li>
                            <a href='#'>Refund Policy</a>
                        </li>
                    </ul>
                </div>
                <div className='Categories'>
                    <h5>Categories</h5>
                    <p>
                        Men's
                        Women's
                        Girl's
                        Boy's
                        Accessories
                    </p>
                </div>
                <div className='Email-box'>
                    <h6>Subscribe To Our Emails</h6>
                    <form action="/actiona-page.phd">
                        {/* <label for="email">Enter your email:</label> */}
                        <input class="email" type="email" id="email" name="email"></input>
                        <input class="sub-btn" type="Submit" value="subscribe"></input>
                    </form>
                </div>
            </div>
            <div>
                <p>© Copyrigth 2022AP Thrift Fasio n All Rigths Reserved</p>
            </div>
        </div>
     );
}

export default Footer;