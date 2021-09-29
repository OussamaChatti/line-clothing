 import React from 'react';
 
 import { GroupContainer,FormInputContainer,FormInputLabel } from './form-input.styles';

const FormInput = ({handlechange,label,value,...props}) => (
    <GroupContainer>
        <FormInputContainer onChange={handlechange} {...props} />
            {
                label?
                (
                <FormInputLabel className={`${value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </FormInputLabel>
                )
                :null
            }
    </GroupContainer>
);

export default FormInput;
