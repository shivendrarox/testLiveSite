import React from 'react';

const Input = (props) => {
    return (
        <input type={props.type} name={props.name} className={props.className} value={props.value} placeholder={props.placeholder} />
    );
};

export default Input;