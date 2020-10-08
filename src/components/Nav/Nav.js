import React from 'react'
import { Route, Link } from 'react-router-dom'
import './Nav.css'


export default class Nav extends React.Component {
    render(){
        return (
            <div>
                <nav role="navigation">
                    <ul id="navBar">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/deals">My Deals</Link>
                        </li>
                        <li>
                            <Link to="/my-week">My Week</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/add-deal">Add Deal</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}