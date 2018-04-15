import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'

import { HeaderStyled, Logo, Navigation } from './styled'

const Header = () => {
    return (
        <HeaderStyled>
            <Logo href='/' title='vk-services' />
            <Navigation>
                <NavLink to='/' exact activeClassName='active'>home</NavLink>
                <NavLink to='/posts' exact activeClassName='active'>top posts</NavLink>
                <NavLink to='/photos' exact activeClassName='active'>photos search</NavLink>
                <NavLink to='/friends' exact activeClassName='active'>mutual friens</NavLink>
            </Navigation>
        </HeaderStyled>
    )
}

export default Header