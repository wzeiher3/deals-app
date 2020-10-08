import React from 'react'

export default class RegistrationForm extends React.Component{
    state = {
        error: null
    }
    
    render(){
        const {error} = this.state;
        return (
            <form className="RegistrationForm">
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
                    <input type="text" id="repassword_input" name="password" />
                </div>
                <div className="buttons">
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}