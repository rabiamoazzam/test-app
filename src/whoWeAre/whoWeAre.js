import React from 'react';
import './whoWeAre.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
function WhoWeAre() {
    return ( 
        <Container>
            <Row className='whoWeAre'>
                <Col className='Image'>
                    <img src='https://www.noupe.com/wp-content/uploads/2022/02/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash-683x1024.jpg'/>
                </Col>
                <Col className='WeAre'>
                    <h2>WHO WE ARE ?</h2>
                    <span>
                        <p>
                        Welcome to AP Thrift Fasion ,where you can find
                        yuor favourite brands clothing at the most affordable prices
                        </p>
                        <p>
                            Our inventry is updated daily so you can find anything from Designer and Vintage clothing
                            suited for Men ,Women and Kids
                        </p>
                        
                        <button className='Btn'>READ MORE</button>
                        
                    </span>
                </Col>
            </Row>
        </Container>
     );
}

export default WhoWeAre;