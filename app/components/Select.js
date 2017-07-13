import React from 'react';

const Select =({placeHolder, name, values, onSelect}) => {
    return (
        <select name={name} onChange={onSelect}>
            <option value={placeHolder}>{placeHolder}</option>
            {values.map((item,index) => {
                return <option key={index} value={item}>{item} m</option>
            })}
        </select>
    )
}

export default Select;