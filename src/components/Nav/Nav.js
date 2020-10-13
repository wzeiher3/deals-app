import React from 'react'
import { Route, Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Nav.css'



export default class Nav extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
      }
    
    renderLoginLink() {
        return (
          <div className='not-logged-in'>
            <Link
              to='/login'>
              Log in
            </Link>
            <Link
              to='/register'>
              Sign Up
            </Link>
          </div>
        )
      }

      renderLogoutLink() {
        return (
          <div className='logged-in'>
            <Link
              onClick={this.handleLogoutClick}
              to='/'>
              Logout
            </Link>
          </div>
        )
      }
    
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
                        {TokenService.hasAuthToken()
                            ? this.renderLogoutLink()
                            : this.renderLoginLink()}
                        </li>
                        
                    </ul>
                </nav>
            </div>
        )
    }
}