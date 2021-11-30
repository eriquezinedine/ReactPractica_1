

import React from 'react';
import CardProyect from './CardProyect';


const ForCardProyect = ({lista}) => {
    return (
        <>
            {lista.map((elemt,index)=> <CardProyect key={index} tecno ={elemt.tecno} name={elemt.name} img={elemt.img}/>)}
        </>
    );
}

export default ForCardProyect;