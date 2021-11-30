import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/s_header/header'
// import Menu from './component/s_menu/menu'
import Info from './component/s_info/Info'
import './config/colors.scss';
import './config/fonts.scss';
import './config/general.scss';
import reportWebVitals from './reportWebVitals';
import mouseClick  from './efectJavscript/moveClick'

ReactDOM.render(
  <>
    <Info />
    <Header />
    {setTimeout(() => {
      mouseClick()
    }, 300)}
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
