import React from 'react'
import { NavLink, Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <div className='nav-container'>
                <img className='logo' src='app/images/logo.png' alt='logo' />
                <ul className='nav'>
                    <li>
                        <NavLink to='/' exact className='action-button shadow animate blue' activeClassName='active'>home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/posts' className='action-button shadow animate red' exact activeClassName='active'>top posts</NavLink>
                    </li>
                    <li>
                        <NavLink to='/photos-search' exact className='action-button shadow animate green' activeClassName='active'>photos search</NavLink>
                    </li>
                    <li>
                        <NavLink to='/mutfriends' exact className='action-button shadow animate yellow' activeClassName='active'>mutual friens</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}