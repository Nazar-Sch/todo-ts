import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className='nav-wrapper blue-grey darken-1 px1'>
                <NavLink to='todo-ts/' className='brand-logo'>
                    React + Typescript
                </NavLink>
                <ul className='right hide-on-med-and-down'>
                    <li>
                        <NavLink to='/'>List todo</NavLink>
                    </li>
                    <li>
                        <NavLink to='/info'>Info</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
