import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Layouts = ({children})=> {
    // const  navigate = useNavigate()
    return(
        <div>
            <div>
                <Link to='/'><p>Home</p></Link>
                <Link to='/catalog'><p>Catalog</p></Link>
                <Link to='/contact'><p>Contact</p></Link>
                <Link to='/itemsCondion'><p>ItemsCondition</p></Link>
                <Link to='/popularBrands'><p>PopularBrands</p></Link>
            </div>
            {children}
            <div>Footer</div>
        </div>
    )
}
export default Layouts