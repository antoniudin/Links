// import { CognitodataPool } from 'amazon-cognito-identity-js';
import axios from 'axios';
import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './form';

// const dataServer = "https://todolist431.azurewebsites.net/api/user/"

class Login extends Form {

    state = {
      data: {email:'', password:''},
      errors: {}
    }

    schema = {
      email:Joi.string().required().email().label("Email"),
      password:Joi.string().required().label("Password")
    }

    doSubmit = () => {
        const currentdata = {
          login: this.state.data.email,
          password: this.state.data.password
        }      
      localStorage.setItem('dataLogin', true)
      localStorage.setItem('data', currentdata.login)
      window.location="/page/links"
    }

    render() { 
        const {data, errors} = this.state;
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