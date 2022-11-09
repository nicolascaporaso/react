import React from "react";
import logo from '../assets/img/logo.svg'
import '../assets/css/Logo.css'
import {Link} from 'react-router-dom'

const Logo = () => {
    return (
        <>
            <Link id="NavLink" to="/"><img className='Logo' src={logo}></img></Link>
        </>
    )
}
export default Logo