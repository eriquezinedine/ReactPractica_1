import React from 'react';
import './Nav.scss';
import './efectNav.scss';

const Nav = () => {

    const lista = 
    [
        {title:'HOME',Url:''},
        {title:'ABOUT',Url:''},
        {title:'PROYECT',Url:''},
    ]

    return ( 
        <nav className='Header_nav'>
            <ul className="nav_menu">
                {lista.map( (elment,index )=> <li key={index} className={elment.title}><p className={elment.title}>{elment.title}</p><div className='span'></div></li>)}
            </ul>
        </nav>
    );
}

export default Nav;