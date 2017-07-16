import React from 'react';

const Select =({name, values, onSelect}) => {
    return (
        <select name={name} onChange={onSelect}>
            {values.map((item,index) => {
                return <option key={index} value={item}>{item} m</option>
            })}
        </select>
    )
}

export default Select;