import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import './HamburgerButton.css'

const HamburgerButton = ({ setShowMenu }) => {

    const handleClick = () => {
        setShowMenu(prev => !prev);
    }

    return (
        <MenuIcon className="hamburger-button" onClick={handleClick}/>
    )
}

export default HamburgerButton;