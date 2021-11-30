import React from 'react';
import './OnePantalla.scss';
import rect from '../../assets/img/rectangulo.svg'
import cir from '../../assets/img/circulo1.svg'
const OnePantalla = () => {
    return ( 
    <article className='OnePantalla'>
        <div className='OnePantalla_container'>
            <h1 className='container_title'>HELLO, I'M A <span>FRONTEND</span> DEVELOPER</h1>
            <p className='container_description'>SEND ME YOUR DESIGNS. I WILL TAKE YOU TO CODE</p>
        </div>

        <figure className='OnPantalla_circulo'>
            <img src={cir} alt="circulo1" />
        </figure>
        <figure className='OnPantalla_Rectangulo'>
            <img src={rect} alt="rectangulo1" />
        </figure>
        
    </article> 
    );
}
 
export default OnePantalla;