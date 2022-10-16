import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './clients.css';
function Clients() {
    return ( 
        <Container className='Clients'>
            <h1>OUR HAPPY ClEINTS</h1>
            <Row className='Reviews'>
                <Col sm={12} lg={4} className='rws'>
                    <img src='https://www.shutterstock.com/image-photo/young-woman-high-school-campus-260nw-1889548993.jpg'/>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industy's standard dummy text ever since the 1500s 
                     </p>
                </Col>
                <Col sm={12} lg={4} className='rws center'>
                    <img src='https://www.shutterstock.com/image-photo/young-woman-high-school-campus-260nw-1889548993.jpg'/>
                    <h5>Sofia</h5>
                    <p>
                        Beaytiful color trainers in great condition I trust this website. Fast
                        dispatch and delivery. I would definetly buy from aap thriftfasion again thank you
                    </p>
                </Col>
                <Col sm={12} lg={4} className='rws'>
                    <img src='https://www.shutterstock.com/image-photo/young-woman-high-school-campus-260nw-1889548993.jpg'/>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industy's standard dummy text ever since the 1500s 
                    </p>
                </Col>
            </Row>
        </Container>
     );
}

export default Clients;