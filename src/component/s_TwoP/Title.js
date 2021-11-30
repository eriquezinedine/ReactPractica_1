import React from 'react';

const Title = ({title ='no_tengo_clase',content='no_tengo_contenido'}) => {
    return (  
        <div className='title_container'>
            <h3 className={title}>{content}</h3>
            <div className='efect_conatainer'></div>
        </div>
    );
}
 
export default Title;