import React from 'react';
import { Link } from 'react-router-dom';
import Sibrahim from '../../siibrahim.png';
import Mchasibrahim from '../../mchasibrahim.png';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return(
        <nav className="nav wrapper grey darken 2">
            <div className="container">
                <img src={Sibrahim} alt="Sibrahim"/>
                <img src={Mchasibrahim} alt="Mchasibrahim"/>
                <Link to='/' className="brand-logo left"> Allez SI IBRAHIM</Link>
                <SignedInLinks />
                <SignedOutLinks /> 
            </div>
        </nav>
    )
}

export default Navbar;