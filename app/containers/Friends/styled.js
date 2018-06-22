import styled from 'styled-components'
import Button from '../../components/Button'
import Caption from '../../components/Caption'

export const FriendsSearchInfo = Caption.extend`
    margin-left: 270px;

    @media (max-width: 600px) {
        margin-left: 160px;
    }
`

export const ButtonSearch = Button.extend`
    width: 100%;
`