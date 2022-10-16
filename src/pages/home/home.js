import React from 'react';
import Logo from '../home/logo/logo'
import Wear from '../home/wear/wear'
import WhoWeAre from '../../whoWeAre/whoWeAre'
import Collection from '../home/collection/collection';
import MenShirts from './menShirts/menShirts';
import BigSale from './bigSale/bigSale'
import WomensShirts from './womensShirts/womensShirts';
import Clients from './clients/clients'
import Footer from './footer/footer'

function Home() {
    return ( 
        <div>
            <Logo/>
            <Wear/>
            <WhoWeAre/>
            <Collection/>
            <MenShirts/>
            <BigSale/>
            <WomensShirts/>
            <Clients/>
            <Footer/>
        </div>
     );
}

export default Home;