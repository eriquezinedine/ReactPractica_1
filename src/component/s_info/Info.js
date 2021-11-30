import React from 'react';
import './Info.scss';
import likendin from '../../assets/img/likendin.png';
import github from '../../assets/img/github.png';


const InfoZ = () => {
    return (
        <section
            className='Info col-30'
        >
            <article className='Info_item'>
                <figure className='Info_item-img'>
                </figure>
                <h1 className='Info_item-title'> <span>ZINEDINE</span> ERIQUE T.</h1>
                <p className='Info_item-description'>FRONTEND</p>
            </article>
            <article className='Info_item'>
                <figure className='Info_item-likendin'>
                    <a href='https://github.com/'>
                        <img src={likendin} className="img-tecLogo" href="https://www.facebook.com/" alt="Likendin" />
                    </a>
                </figure>
                <figure className='Info_item-github'>
                    <a href='https://github.com/'>
                        <img src={github} className="img-tecLogo"  href="https://"alt="github" />
                    </a>
                </figure>
            </article>
            <article className='Info_item'>
                <p className='Info_item-p'>Huacho, Perú</p>
                <p className='Info_item-p'>zinedinedeveloper@gmail.com</p>
                <p className='Info_item-p'>+51 952 542 211</p>
            </article>
            <article className='Info_item'>
                <button type='button' className='Info_item-btn'>Contac</button>
                <button type='button' className='Info_item-btn'>Download C.V</button>
            </article>
        </section>
     );
}

export default InfoZ;