// import { CognitodataPool } from 'amazon-cognito-identity-js';
import axios from 'axios';
import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './form';
import Input from './input';

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
            <Input name = "email" type="email" value={data.email} label="Email" errors = {errors} onChange = {this.handleChange} />
            {errors.email && <div className="alert alert-danger alert-sm">{errors.email}</div> }
            <Input name = "password" type="password" value={data.password} label="Password" errors = {errors} onChange = {this.handleChange} />
            {errors.password && <div className="alert alert-danger alert-sm">{errors.password}</div> }
            <button disabled = {this.validate()} type="submit" className="btn btn-primary btn-sm">Login</button>
          </form>
        </div>
    }
}
 
export default Login;