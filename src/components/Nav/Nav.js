import React from 'react'
import { Route, Link } from 'react-router-dom'
import ApiContext from '../../contexts/ApiContext'
import TokenService from '../../services/token-service'
import './Nav.css'


export default class Nav extends React.Component {
    static contextType = ApiContext;
  
    state = {
      logIn: false
    }
  
    componentDidMount(){
      this.setState({
        logIn: TokenService.hasAuthToken()
      })
    }


  //   componentDidUpdate(previous){
  //     console.log("previous", previous)
  //   if(this.context.logIn !== previous.logIn)
  //        console.log("Nav ComponentDidmount", this.context)
  // }
  
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.setState({
          logIn: TokenService.hasAuthToken()
        },() => console.log("Nav logout click", this.state.logIn))
        this.context.logIn = TokenService.hasAuthToken();
        console.log("Nav logout click", this.state.logIn)
      }
    
    renderLoginLink() {
        return (
          
            <Link
              to='/login' data-item='Login'>
             Login
            </Link>
        
        )
      }

      renderLogoutLink() {
        return (
          
            <Link
              onClick={this.handleLogoutClick}
              to='/' data-item='Logout'>
              Logout
            </Link>
      
        )
      }
    
    render(){
      const {logIn} = this.state;
        return (
            <div>
                <nav>
                    <ul className="menuItems">
                        <li>
                            <Link to="/" data-item='Home'>
                              
                              Home
                              
                              </Link>
                        </li>
                        <li>
                            <Link to="/deals" data-item='Deals'>Deals</Link>
                        </li>
                        <li>
                            <Link to="/my-week" data-item='Week'>Week</Link>
                        </li>
                        <li>
                            <Link to="/about" data-item='About'>About</Link>
                        </li>
                        <li>
                            <Link to="/add-deal" data-item='Add Deal'>Add Deal</Link>
                        </li>
                        <li>
                        {(!logIn)
                            ? this.renderLoginLink()
                            : this.renderLogoutLink()}
                     
                      </li>
                    </ul>
                </nav>
            </div>
        )
    }
}