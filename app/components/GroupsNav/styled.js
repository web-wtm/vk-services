import styled from 'styled-components'
import Button from '../Button'

export const GroupSearch = styled.div`

`

export const ButtonSearch = Button.extend`
    width: 100%;
`

export const GroupsNavList = styled.ul`
    display: inline-block;
    margin: 0;
    padding: 0;
    width: 100%;
`
export const GroupsNavItem = styled.li`
    display: block;
    cursor: pointer;
    padding: 15px 0;
    margin: 1px 0;
    font-size: 18px;
    font-weight: bold;
    color: #e5e5e5;
    transition: background ease-in 333ms;

    &:first-child {
        margin: 0;
    }

    &:hover {
        background-color: #47b475;
    }
`

export const GroupLogo = styled.img`
    vertical-align: middle;
    width: 30px;
    border-radius: 50%;
    margin: -5px 10px 0;
`