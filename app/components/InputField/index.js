import React from 'react'

import { FieldGroup, Label, Input } from './styled'

const InputField =({fieldName, placeHolder, value, type, label, onChange}) => {
    return (
        <FieldGroup>
            {label && <Label>{label}</Label>}
            <Input 
                name={fieldName}
                value={value}
                placeholder={placeHolder}
                type={type}
                onChange={onChange}
            />
        </FieldGroup>
    )
}

InputField.defaultProps = {
    type: 'text',
    placeHolder: ''
}

export default InputField;