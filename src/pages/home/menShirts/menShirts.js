import React from 'react';
import './menShirts.css'
import AddToCard from '../../addToCard/addToCard'
import { Col, Container, Row } from 'react-bootstrap';
function MenShirts () {
    return ( 
        <Container className='MenShirt'>
            <div className='shirtss'>    
                <h1>MENS ARRIVALS</h1>
            </div>    
            <Row className='Card-main'>
                <Col sm={12} lg={3}>
                <AddToCard image='https://becky.ee/wp-content/uploads/2019/11/Projob-t-s%C3%A4rk-tumesinine.jpg' title='T-shirt Navy Blue Polo' price='$28'/>
                </Col>
                <Col sm={12} lg={3}>
                <AddToCard image='https://www.pngall.com/wp-content/uploads/2016/04/Jeans-PNG-Image.png' title='Ripped Blue Jeans' price='$80'/>
                </Col>
                <Col sm={12} lg={3}>
                <AddToCard image='https://pngimg.com/uploads/tshirt/tshirt_PNG5448.png' title='T-shirt Grey Polo' price='$20'/>
                </Col>
                <Col sm={12} lg={3}>
                <AddToCard image='https://i.etsystatic.com/16835241/r/il/11b66f/1764077373/il_794xN.1764077373_7hi1.jpg' title='T-shirt Hoodie Pierogi Clothing' price='$55'/>
                </Col>
            </Row>
            <button className='Btn'>VIEW MORE</button>
        </Container>
     );
}

export default MenShirts;