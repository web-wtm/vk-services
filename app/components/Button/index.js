import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    display: inline-block;
    padding: 15px;
    text-transform: uppercase;
    font-size: 22px;
    background-color: #713FB4;
    border: 2px solid #713FB4;
    color: #fff;
    text-decoration: none;
    transition: all ease-in 222ms;
    vertical-align: middle;
    cursor: pointer;
    font-family: 'Orbitron', sans-serif;

    &:hover {
        background-color: white;
        color: #713FB4;
    }

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 900px) {
        padding: 10px;
        font-size: 16px;
    }
`

const Button = ({onClick, text}) => {
    return (
        <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
    )
}

Button.propTypes = {
    onClick: propTypes.func,
    text: propTypes.string
}

export default Button