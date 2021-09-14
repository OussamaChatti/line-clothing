 import React from 'react';
 
 import './form-input.scss';

const FormInput = ({handlechange,label,value,...props}) => (
    <div className='group'>
        <input className='form-input' onChange={handlechange} {...props} />
            {
                label?
                (
                <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
                )
                :null
            }
    </div>
);

export default FormInput;
