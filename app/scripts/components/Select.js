import React from 'react'

const Select =({name, values, onSelect, selected}) => {
    return (
        <select name={name} onChange={onSelect} defaultValue={selected}>
            {values.map((item,index) => {
                return <option key={index} value={item}>{item} m</option>
            })}
        </select>
    )
}

export default Select;