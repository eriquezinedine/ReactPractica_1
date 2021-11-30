import './header.scss';
import React from 'react';
import Nav from '../s_nav/Nav'
import Slider from '../s_slider/Slider'

const Header = () => {
    return (
        <div className="Header col-70">
            <Nav />
            <Slider />
        </div>
    );
}

export default Header;