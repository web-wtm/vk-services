import React from 'react'
import { NavLink, Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <ul className='nav'>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/posts' exact activeClassName='active'>top posts</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}