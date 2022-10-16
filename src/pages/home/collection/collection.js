import React from 'react';
import './collection.css';
import Cardss from '../../cardss/cardss';
import { Col, Container, Row } from 'react-bootstrap';

function Collection() {
    return (
        <Container fluid className='g-0'>
            <Row >
                <h1>OUR COLLECTION</h1>
            </Row>
            <Row className='main-collection g-0'>
                <Col lg={6} sm={12} className='cl-one g-0'>
                    <div className='CARDSS'>
                        <h6>NEW ARRIVALS</h6>
                        <h2>TOUCH OF COLOR</h2>
                        <p>The Create Neck Style T-Shirt</p>
                        <button className='Btn'>SHOP NOW</button>
                    </div>
                </Col>
                <Col className='cl-two g-0' lg={6} sm={12}>
                    <Row>
                        <Col className='cl-two-one g-0' lg={6} sm={12}>
                            <img src='' />
                        </Col>
                        <Col className='cl-two-two g-0' lg={6} sm={12}>
                            <img src='' />
                        </Col>
                    </Row>
                </Col>
                <Col className='cl-three g-0' lg={6} sm={12}>
                    <Row className='g-0'>
                        <Col className='cl-three-one g-0'>
                            <img src='' />
                        </Col>
                        <Col className='cl-three-two g-0'>
                            <img src='' />
                        </Col>
                    </Row>
                </Col>
                <Col className='cl-four g-0' lg={6} sm={12}>
                    <img src='' />
                </Col>
            </Row>
        </Container>
    );
}

export default Collection;