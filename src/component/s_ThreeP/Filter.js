import React from 'react';
export const lista = 
    [
        {title:'ALL',Url:''},
        {title:'REACT',Url:''},
        {title:'FIREBASE',Url:''},
        {title:'VANILLA',Url:''},
    ]
const Filter = () => {

    

    return ( 
        <nav className='filter_tec'>
            <ul className="tec_content">
                {lista.map( (elment,index )=> <li key={index} className={elment.title}><p className={elment.title}>{elment.title}</p></li>)}
            </ul>
        </nav>
    );
}


export default Filter;