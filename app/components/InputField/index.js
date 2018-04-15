import './index.scss'
import React from 'react'

const InputField =({fieldName, placeHolder, value, type, label, onChange}) => {
    return (
        <div className='field-group'>
            {label && <label className='form-label'>{label}</label>}
            <input 
                name={fieldName}
                value={value}
                placeholder={placeHolder}
                type={type}
                onChange={onChange}
            />
        </div>
    )
}

InputField.defaultProps = {
    type: 'text',
    placeHolder: ''
}

export default InputField;