import React from 'react'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'          

export default class LoginForm extends React.Component{
    state = {
        error: null
    }
    
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
              this.props.history.push('/')
              
            })
           .catch(res => {
              console.log(res)
              this.setState({ error: 'failed to authenticate' })
            })
     }
    
    
    render(){
        const {error} = this.state;
        console.log(error);

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
                    <input type="text" id="password_input" name="password" />
                </div>
                <div className="buttons">
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}