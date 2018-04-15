import React from 'react'
import styled from 'styled-components'

const SelectContainer = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 20px;
`

const SelectStyled = styled.select`
   margin-bottom: 20px;
   font-size: 20px;
`

const Select =({name, values, onSelect, selected}) => {
    return (
        <SelectContainer>
            <SelectStyled name={name} onChange={onSelect} defaultValue={selected}>
                {values.map((item,index) => {
                    return <option key={index} value={item}>{item} m</option>
                })}
            </SelectStyled>
        </SelectContainer>
    )
}

export default Select;