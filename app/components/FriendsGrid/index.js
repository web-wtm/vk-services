import React, { Fragment } from 'react'
import { FriendsContainer, User, UserId, UserName, UserPhoto, UserDeleted } from './styled'
 
const FriendsGrid = (props) => {
    return (
        <FriendsContainer>
            {props.friends.length === 0 ? 
                <Fragment>
                    <UserDeleted />
                    <p>They don't have mutual friends</p>
                </Fragment> 
                : 
                props.friends.map((item, index) => {
                    return (
                        <User key={index} target='_blank' href={`https://vk.com/${item.screen_name}`}>
                            {item.photo_200 ?  <UserPhoto src={item.photo_200} /> : <UserDeleted />}
                            <UserName>{item.first_name} {item.last_name}</UserName>
                            <UserId>id: {item.id}</UserId>
                        </User>
                    )
                })
            }
        </FriendsContainer>
    )
}

export default FriendsGrid