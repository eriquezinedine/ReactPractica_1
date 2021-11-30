import React from 'react';
import Title from './Title';
import './TwoPantalla.scss'
import CardTecno from './CardTecno'
import html5 from '../../assets/img/html5.png'
import css3 from '../../assets/img/css3.png'
import javascript from '../../assets/img/javascript.png'
import react from '../../assets/img/react.png'
import firebase from '../../assets/img/firebase.png'

import rect2 from '../../assets/img/rectangulo2.svg'
import rect3 from '../../assets/img/rectangulo3.svg'

const TwoPantalla = () => {


    return ( 
        <section className='TwoPantalla'>
            <article className='TwoPantalla_about'>
                <Title title='about_title' content='ABOUT ME' />
                <p className='about_description'>I am a self-taught student, currently I have been studying the basic technologies of the web for 2 years and I am trained to take your design to code. My current goal is to specialize in react</p>
            </article>
            <article className='TwoPantalla_content'>
                <div className='content_studies col-50'>
                    <div ClassName='content-skills '>
                        <Title title ='skills-title' content='SKILLS'/>
                        <div class='grid'>
                            <CardTecno logo={html5} description='HTML5'/>
                            <CardTecno logo={css3} description='CSS3'/>
                            <CardTecno logo={javascript} styleI={{padding: '15px'}} description='JAVASCRIPT'/>
                        </div>
                    </div>
                    <div ClassName='content-studens '>
                        <Title title ='studens-title' content='I AM CURRENTLY STUDYING'/>
                        <div class='grid'>
                            <CardTecno logo={react} description='REACT'/>
                            <CardTecno logo={firebase} description='FIREBASE'/>
                        </div>
                    </div>
                </div>
                {/* <div className='content_studies'></div> */}
            </article>
            <figure className='TwoPantalla_Rectangulo2'>
                <img src={rect2} alt="rectangulo2" />
            </figure>
            <figure className='TwoPantalla_Rectangulo3'>
                <img src={rect3} alt="rectangulo3" />
            </figure>
        </section> 
    );
}
 
export default TwoPantalla;