import React from 'react';
import './Slider.scss'
import OnePantalla from '../s_OneP/OnePantalla'
import TwoPantalla from '../s_TwoP/TwoPantalla'
import ThreePantalla from '../s_ThreeP/ThreePantalla'

const Slider = () => {
    return ( 
        <div className='slider'>
            <div className ='slider_traslator'>
                <OnePantalla />
                <TwoPantalla />
                <ThreePantalla />
            </div>
        </div>
    );
}


export default Slider;