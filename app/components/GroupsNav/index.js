import React, { Fragment } from 'react'

import Button from '../Button'
import InputField from '../InputField'
import { 
    GroupsNavContainer, 
    GroupsNavList,
    GroupsNavItem,
    GroupLogo, 
    GroupSearch,
    ButtonSearch
} from './styled'

const GroupsNav = (props) => {
    let groupsDomain = [
        {
            name: 'ЁП',
            photoSrc: 'https://pp.userapi.com/c841427/v841427388/97b1/_B5iRijVxDE.jpg',
            domain: 'fuck_humor'
        },
        {
            name: '#ябсъездил',
            photoSrc: 'https://pp.userapi.com/c624331/v624331463/395fa/HyoRKKxp5v8.jpg',
            domain: 'idtravel'
        },
        {
            name: 'Смейся до слёз :D',
            photoSrc: 'https://cs7050.userapi.com/c638330/v638330437/23f09/TX1xbrk6FHs.jpg',
            domain: 'ifun'
        },
        {
            name: 'Четкие Приколы',
            photoSrc: 'https://pp.userapi.com/c639816/v639816345/365b9/_elqC5XnXk8.jpg',
            domain: 'ilikes'
        }
    ];
    
    return (
        <Fragment>
            <GroupsNavList>
                {groupsDomain.map((item) => {
                    return (
                        <GroupsNavItem key={item.domain} 
                            style={item.domain === props.selectedGroup ? { background: '#47b475'} : null} 
                            onClick={props.onSelect.bind(null, item.domain)}
                        >
                            <GroupLogo src={item.photoSrc} />
                                {item.name}
                        </GroupsNavItem>
                    )
                })}
            </GroupsNavList>
            <GroupSearch>
                <InputField
                    fieldName='searchGroup'
                    placeHolder="name of group"
                    value={props.inputValue}
                    onChange={props.onChangeInput}
                />
                <ButtonSearch onClick={props.onClickBtn}>Search</ButtonSearch>
            </GroupSearch>
        </Fragment>
    )
}

export default GroupsNav