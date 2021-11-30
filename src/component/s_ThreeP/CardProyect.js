import React from 'react';
const CardProyect = ({tecno,name,img}) => {
    return (
    <div className='cover_background' style={{backgroundImage:`url(${img})`}} data-card={tecno}>
        <div className='cover_content-filter'>
            <div className='cover_content'>
                <h3 className='cover_title'>{name}</h3>
                <div className='cover_button-content'>
                    <button className='button_action'>DEMO</button>
                    <button className='button_action'>CODE</button>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default CardProyect;