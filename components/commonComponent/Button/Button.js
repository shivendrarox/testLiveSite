import React from 'react';

const Button = (props) => {
    return (
        <button id={props.id} type={props.type} className={props.className} onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default Button;