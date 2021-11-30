import React from 'react';
import ReactDOM from 'react-dom';
import { list } from '../component/s_ThreeP/ThreePantalla';
import ForCardProyect from '../component/s_ThreeP/ForCardProyect'


const moveClick = () => {
    const nav_menu = document.querySelector('.nav_menu');
    const slider_traslator = document.querySelector('.slider_traslator');
    nav_menu.addEventListener('click', (e) => {
        e.preventDefault();
        let puntero = e.target.classList.value;
        if(puntero ==='HOME'){
            slider_traslator.style.transform= 'translateX(0%)'
        }else if(puntero ==='ABOUT'){
            slider_traslator.style.transform='translateX(-33.33%)'
        }else if(puntero ==='PROYECT'){
            slider_traslator.style.transform='translateX(-66.66%)'

        }
    })

    const pintar =(lista)=>{
        ReactDOM.render(
            <>
                <ForCardProyect lista={lista} />
            </>,
            document.getElementById('grid')
        );
    }

    const tec_content=document.querySelector('.tec_content');

    tec_content.addEventListener('click', (e)=>{
        let puntero = e.target.classList.value;
        let newFilter;
        switch (puntero) {
            case 'ALL':
                // pintar(list);
                pintar(list);
                break;
            case 'REACT':
                newFilter =list.filter(list => list.tecno ===puntero)
                pintar(newFilter);
                break;
            case 'FIREBASE':
                newFilter =list.filter(list => list.tecno ===puntero)
                pintar(newFilter);
                break;
            case 'VANILLA':
                newFilter =list.filter(list => list.tecno ===puntero)
                pintar(newFilter);
                break;
            default:
                console.log('no funco')
                break;
        }
    })
}






export default moveClick;
