import styled from 'styled-components'
import UserDeletedThumb from '../../assets/images/user-deleted.png'

export const FriendsContainer = styled.div`
    text-align: center;
    margin-left: 270px;
`

export const User = styled.a`
    display: inline-block;
    text-decoration: none;
    margin: 20px;
    color: #333;
    transition: color ease-in 333ms;

    &:hover {
        color: #47b475;
    }
`

export const UserId = styled.div`
    color: rgb(71, 180, 117);
    font-size: 18px;
    text-align: center;
`

export const UserName = styled.p`
    font-family: 'Podkova', serif;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    margin: 5px;
`

export const UserPhoto = styled.img`
    vertical-align: middle;
    border-radius: 50%;
    margin-right: 10px;
    border: 3px solid #FFF;
`

export const UserDeleted = styled.div`
    background-image: url(${UserDeletedThumb});
    background-size: 100%;
    vertical-align: middle;
    border-radius: 50%;
    margin-right: 10px;
    height: 200px;
    width: 200px;
` 

