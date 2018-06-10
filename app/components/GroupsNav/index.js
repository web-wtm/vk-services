import React, { Fragment } from 'react'
import Button from '../Button'
import InputField from '../InputField'
import groups from '../../utils/groups'
import { 
    GroupsNavContainer, 
    GroupsNavList,
    GroupsNavItem,
    GroupLogo, 
} from './styled'

const GroupsNav = ({ selectedGroup, onSelectGroup, params }) => {
    return (
        <Fragment>
            <GroupsNavList>
                {groups.map(({ domain, name, photoSrc }) => {
                    return (
                        <GroupsNavItem key={domain} 
                            style={domain === selectedGroup ? { background: '#47b475'} : null} 
                            onClick={onSelectGroup.bind(null, {domain, count: params.count})}
                        >
                            <GroupLogo src={photoSrc} />
                                {name}
                        </GroupsNavItem>
                    )
                })}
            </GroupsNavList>
        </Fragment>
    )
}

export default GroupsNav