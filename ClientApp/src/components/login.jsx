// import { CognitoUserPool } from 'amazon-cognito-identity-js';
import axios from 'axios';
import React, { Component } from 'react';
import Joi from 'joi-browser';

const userServer = "https://todolist431.azurewebsites.net/api/user/"

class Login extends React.Component {

    state = {
      user: {email:'', password:''},
      errors: {}
    }

    schema = {
      email:Joi.string().required().label("Email"),
      password:Joi.string().required().label("Password")
    }

    handleSubmit = e => {
      e.preventDefault();
      const errors = this.validate();
      this.setState({errors: errors || {} });
      if (errors) return;
    }

    validate = () => {
      const options = {abortEarly: false}
      const {error} = Joi.validate(this.state.user, this.schema, options)
      if (!error) return null
      const errors = {};
      for (let item of error.details)
      errors[item.path[0]] = item.message
      return errors
    }

    validateProperty = ({name, value}) => {
      const obj = { [name] : value }
      const schema = { [name] : this.schema[name] }
      const {error} = Joi.validate(obj, schema)
      return error ? error.details[0].message : null
    }

    handleLogin = () => {
      //   const currentUser = {
      //     login: this.state.user.email,
      //     password: this.state.user.password
      //   }      
          
      // localStorage.setItem('userLogin', true)
      // localStorage.setItem('user', currentUser.login)
      // window.location="/page/links"
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
              <label htmlFor="email">Email</label>
              <input name = "email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
              {errors.email && <div className="alert alert-danger alert-sm">{errors.email}</div> }
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input name = "password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}/>
              {errors.password && <div className="alert alert-danger alert-sm">{errors.password}</div> }
            </div>
            <button disabled = {this.validate()} type="submit" className="btn btn-primary btn-sm">Login</button>
          </form>
        </div>
    }
}
 
export default Login;