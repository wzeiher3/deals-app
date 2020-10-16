import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'  
import {Link } from 'react-router-dom'        
import ApiContext from '../../contexts/ApiContext'
import './LoginForm.css'

export default class LoginForm extends React.Component{
    state = {
        error: null
    }
     static contextType = ApiContext;
    
    handleSubmitJwtAuth = ev => {
          ev.preventDefault()
          this.setState({ error: null })
          
    
          AuthApiService.postLogin({
            user_name: ev.target['user_name'].value,
            password: ev.target['password'].value,
          })
            .then(res => {
              TokenService.saveAuthToken(res.authToken)
              console.log(res.authToken)
    
              this.context.fetchDeals();
              console.log("Login Form click", this.context.logIn)
              this.props.history.push('/')
            })
           .catch(res => {
              console.log(res)
              this.setState({ error: 'failed to authenticate' })
            })
     }
    
    
    render(){
        const {error} = this.state;

        return (
            <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
                <div role="alert">
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className="user_name">
                    <label htmlFor="username_input">
                        User Name
                    </label>
                    <input type="text" id="username_input" name="user_name" />
                </div>
                <div className="password">
                    <label htmlFor="password_input">
                        Password 
                    </label>
                    <input type="password" id="password_input" name="password" />
                </div>
                <div>
                    <button type="submit" className="buttons">Submit</button>
                    <button type="submit" className="buttons"><Link to='/register'>Register</Link></button>
                </div>
            </form>
        )
    }
}