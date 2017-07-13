import React from 'react'
import { NavLink, Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <div className='nav-container'>
                <a href='/' title='vk-services'>
                    <img className='logo' src='app/images/logo.png' alt='logo' />
                </a>
                <ul className='nav'>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/posts' exact activeClassName='active'>top posts</NavLink>
                    </li>
                    <li>
                        <NavLink to='/photos-search' exact activeClassName='active'>photos search</NavLink>
                    </li>
                    <li>
                        <NavLink to='/mutfriends' exact activeClassName='active'>mutual friens</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}