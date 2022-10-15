import React from 'react'
import Squad from './Squad'
import Home from './Home'
import { Routes, Route,Link } from 'react-router-dom'
import Barca from "./barcelona.png"

const NavRoutes = () => {
    return (

        < >
      
        <img className='barcaLogo' src={Barca} alt='barcaLogo'/>
        <nav className='nav'>
            <ul>
            <li> <Link to="/">HOME</Link></li>
            <li> <Link to="/squad">SQUAD</Link></li>
            </ul>
        </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/squad' element={<Squad />} />
            </Routes>
        
        
        </>


    )
}

export default NavRoutes