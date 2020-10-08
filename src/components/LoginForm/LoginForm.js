import React from 'react'

export default class LoginForm extends React.Component{
    state = {
        error: null
    }
    
    render(){
        const {error} = this.state;
        return (
            <form className="LoginForm">
                <div role="alert">
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className="login_username">
                    <label htmlFor="username_input">
                        User Name
                    </label>
                    <input type="text" id="username_input" name="username" />
                </div>
                <div className="login_passwork">
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