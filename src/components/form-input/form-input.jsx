 import React from 'react';
 import './form-input.scss';

const FormInput = ({...props}) => (
    <div className='group'>
        <input className='form-input' onChange={props.handleChange} {...props} />
            {
                props.label?
                (
                <label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
                    {props.label}
                </label>
                )
                :null
            }
    </div>
);

export default FormInput;
