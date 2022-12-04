import React from "react";
import { Link } from 'react-router-dom';
import '../assets/css/Logo.css';
import logo from '../assets/img/logo.svg';

const Logo = () => {
    return (
        <>
            <Link id="NavLink" to="/"><img className='Logo' src={logo}></img></Link>
        </>
    )
}
export default Logo