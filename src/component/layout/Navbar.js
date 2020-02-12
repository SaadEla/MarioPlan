import React from 'react';
import { Link } from 'react-router-dom';
import Sibrahim from '../../siibrahim.png';
import Mchasibrahim from '../../mchasibrahim.png';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    console.log(profile);
    const links = auth.uid ? 
    <div className="container">
        <img src={Mchasibrahim} alt="Mchasibrahim"/>
        <Link to='/' className="brand-logo left"> Allez SI IBRAHIM</Link>
        <SignedInLinks {...profile} />
    </div>
    :
    <div className="container">
        <img src={Sibrahim} alt="Sibrahim"/>
        <Link to='/' className="brand-logo left"> Allez SI IBRAHIM</Link>
        <SignedOutLinks /> 
    </div>;
    return(
        <nav className="nav wrapper grey darken 2">
            {links}
        </nav>
    )
}

const mapStateToProps = (state) =>{
    //console.log(state)
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);