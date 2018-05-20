import styled from 'styled-components'
import Button from '../../components/Button'
import Caption from '../../components/Caption'

export const FriendsSearchInfo = Caption.extend`
    margin-left: 270px;
`

export const ButtonSearch = Button.extend`
    width: 100%;
`

export const UserId = styled.div`
    color: #fff;
    font-size: 18px;
    text-align: center;

    span {
        color: rgb(71, 180, 117);
    }
`