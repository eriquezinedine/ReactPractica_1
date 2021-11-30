import React from 'react';
import './padding.scss';

const CardTecno = ({logo, description='not description',styleI }) => {
    return (
        <div className='figure_tec'>
            <figure id={description} style={styleI} className='tec_figure'>
                <img src={logo} alt="ICONO_TEC"/>
            </figure>
            <p className='tec_p'>{description}</p>
        </div>
    );
}
 
export default CardTecno;