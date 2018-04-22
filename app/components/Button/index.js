import styled from 'styled-components'

export const Button = styled.button`
    display: inline-block;
    padding: 15px;
    text-transform: uppercase;
    font-size: 22px;
    background-color: #1d4076;
    border: 0;
    color: #fff;
    text-decoration: none;
    transition: all ease-in 222ms;
    vertical-align: middle;
    cursor: pointer;
    font-family: 'Orbitron', sans-serif;

    &:hover {
        background-color: #FF612F;
    }

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 900px) {
        padding: 10px;
        font-size: 16px;
    }
`

export default Button