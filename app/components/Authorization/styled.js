import styled from 'styled-components'
import Button from '../Button'

export const Info = styled.div`
    font-size: 22px;
    display: inline-block;
    margin-top: 150px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    background-color: #fff;

    @media screen and (max-width: 900px) {
        font-size: 16px;
    }

    @media screen and (max-width: 600px) {
        font-size: 12px;
        line-height: 2;
    }
`

export const LogIn = styled.a`
    background-color: #47b475;
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    margin-left: 10px;
    text-transform: uppercase;
    transition: all ease 333ms;

    &:hover {
        background-color: #1d4076;
    }
`

export const SaveToken = Button.extend`
    padding: 5px;
    margin-left: 10px;
`