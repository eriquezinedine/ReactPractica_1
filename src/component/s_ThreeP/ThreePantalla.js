import React from 'react';
import './ThreePantalla.scss'
import Title from '../s_TwoP/Title'
import Filter from './Filter'
import ForCardProyect from './ForCardProyect';
import cover_1 from '../../assets/img/cover_1.png'
import cover_2 from '../../assets/img/cover_2.png'
import cover_3 from '../../assets/img/cover_3.png'
import cover_4 from '../../assets/img/cover_4.png'

export const list =[
    {tecno:'VANILLA',name:'CEFI-HUACHO',img:cover_1},
    {tecno:'VANILLA',name:'CAMPING',img:cover_2},
    {tecno:'VANILLA',name:'MAOLOAP-STORE',img:cover_3},
    {tecno:'REACT',name:'LEARN TO ADD',img:cover_4},
]

const ThreePantalla = () => {

    return (
        <section className='ThreePantalla'>
            <Title title='content_title-three' content='PROYECT'/>
            <Filter />
            <article id='grid' className='grid'>
                <ForCardProyect lista={list}/>
            </article>
        </section>
    );
}

export default ThreePantalla;