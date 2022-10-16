import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './bigSale.css' 
function BigSale() {
    return (
        <Container fluid className='bigSale'>
            <Container>
                <Row className='Shop'>
                    <Col>
                    <p>Big Sale upto 30% off</p>
                    <h1>SHOP FOR GREAT</h1>
                    <h1>SELECTION OF T-SHIRTS</h1>
                    <button className='Btn'>SHOP NOW</button>
                    </Col>
            </Row>
            </Container>
        </Container>
    );
}

export default BigSale;