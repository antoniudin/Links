import React, { Component } from 'react';

const Input = ({name, label, type, value, placeholder, onChange, errors, inputClass}) => {
    return (  
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        error={errors}
        type={type}
        placeholder={placeholder}
        className={inputClass}/>
    </div> 
    )
}
 
export default Input;