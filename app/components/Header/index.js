import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoImg from '-!babel-loader!svg-react-loader?name=logo!../../assets/images/logo.svg'
import { HeaderStyled, Logo, Navigation } from './styled'

const Header = ({isLoading}) => {
    return (
        <HeaderStyled>
            <Logo href='/' title='vk-services'> 
                <LogoImg style={{width: '86px'}} />
            </Logo>
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