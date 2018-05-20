import React, { Fragment } from 'react'
import Button from '../Button'
import InputField from '../InputField'
import groups from '../../utils/groups'
import { 
    GroupsNavContainer, 
    GroupsNavList,
    GroupsNavItem,
    GroupLogo, 
    GroupSearch,
    ButtonSearch
} from './styled'

const GroupsNav = (props) => {
    return (
        <Fragment>
            <GroupsNavList>
                {groups.map((item) => {
                    return (
                        <GroupsNavItem key={item.path} 
                            style={item.path === props.selectedGroup ? { background: '#47b475'} : null} 
                            onClick={props.onSelect.bind(null, item.path)}
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