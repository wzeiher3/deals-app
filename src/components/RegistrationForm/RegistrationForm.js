import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

export default class RegistrationForm extends React.Component{
    state = {
        error: null
    }

    handleSubmit = ev => {
        ev.preventDefault()
        
        
        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: ev.target['username'].value,
            password: ev.target['password'].value,
        })
        .then(user => {
            console.log(user)
            TokenService.makeBasicAuthToken(user.user_name, user.password)
            this.props.history.push('/')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
        
}
    
    render(){
        const {error} = this.state;
        return (
            <form className="RegistrationForm" onSubmit={this.handleSubmit}>
                <div role="alert">
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className="register_username">
                    <label htmlFor="username_input">
                         Enter User Name
                    </label>
                    <input type="text" id="username_input" name="username" />
                </div>
                <div className="register_password">
                    <label htmlFor="password_input">
                        Enter Password 
                    </label>
                    <input type="text" id="password_input" name="password" />
                </div>
                <div className="register_repassword">
                    <label htmlFor="repassword_input">
                        Re-Enter Password 
                    </label>
                    <input type="text" id="repassword_input" name="repassword" />
                </div>
                <div className="buttons">
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}