import React from 'react'
import { Input } from './styled'

const InputField =({fieldName, placeHolder, value, type, label, onChange}) => {
    return (
        <Input 
            name={fieldName}
            value={value}
            placeholder={placeHolder}
            type={type}
            onChange={onChange}
        />
    )
}

InputField.defaultProps = {
    type: 'text',
    placeHolder: ''
}

export default InputField;