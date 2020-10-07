import React from 'react'
import { Route, Link } from 'react-router-dom'


export default class Nav extends React.Component {
    render(){
        return (
            <div>
                <nav role="navigation">
                    <ul>
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
                    </ul>
                </nav>
            </div>
        )
    }
}