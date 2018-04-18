import React from 'react'
import styled from 'styled-components'
import ReactScrollUp from 'react-scroll-up'

const ScrollUpStyled = styled.span`
    background-color: rgba(255, 0, 0, 0.6);
    padding: 15px;
    border-radius: 50%;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color ease 222ms;

    &:hover {
        background-color: rgba(255, 0, 0, 1);
    }
`

const ScrollUp = () => {
    return (
        <ReactScrollUp showUnder={160} style={{zIndex: 1}}>
            <ScrollUpStyled>up</ScrollUpStyled>
        </ReactScrollUp>
    )
}

export default ScrollUp