import { CognitoUserPool } from 'amazon-cognito-identity-js';
import React, { Component } from 'react';

class Login extends React.Component {

    state = {
      user: {email:'', password:''},
      errors: {}
    }

    handleSubmit = e => {
      e.preventDefault();
      
    }

    validateProperty = ({name, value}) => {
      if (name==='email') {
        if (value.trim()==='') return "Email is required"
      //...
      }
      if (name==='password') {
        if (value.trim()==='') return "Password is required"
      //...
      }
    }

    handleLogin = () => {
      const currentUser = {
        login: this.state.user.email,
        password: this.state.user.password
      }
      localStorage.setItem('userLogin', true)
      localStorage.setItem('user', currentUser.login)
      window.location="/page/links"

    }

    handleChange = ({currentTarget:input}) => {
      const errors = {...this.state.errors}
      const errorMessage = this.validateProperty(input)
      if (errorMessage) errors[input.name] = errorMessage
      else delete errors[input.name]

      const user = {...this.state.user}
      user[input.name] = input.value;
      this.setState({user,errors});
  }

    render() { 
        const {errors} = this.state;
        return <div className="m-3">
          <form onSubmit={this.handleSubmit}> 
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input name = "email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
              {errors.email && <div className="alert alert-danger alert-sm">{errors.email}</div> }
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input name = "password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}/>
              {errors.password && <div className="alert alert-danger alert-sm">{errors.password}</div> }
            </div>
            <button type="submit" className="btn btn-secondary btn-sm" onClick={this.handleLogin}>Login</button>
          </form>
        </div>
    }
}
 
export default Login;