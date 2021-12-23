import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/utilities.css"


const Backdrop = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onClick} className="Backdrop"></div>,
        document.getElementById('backdrop-protal')
    );
};

export default Backdrop;

