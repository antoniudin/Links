import React from "react";
import Form from './form';
import Joi from 'joi-browser';
import Input from "./input";

class Register extends Form {
  state = {
    user: {user:'', email:'', password:''},
    errors: {}
  }
  
  schema = {
    username:Joi.string().required().label("Username"),
    email:Joi.string().required().email().label("Email"),
    password:Joi.string().required().label("Password")
  }

  doSubmit = () => {

  }

  handleChange = () => {

  }

  render() { 
    const {errors, user} = this.state;
    return <div className="m-3">
    <form onSubmit={this.handleSubmit}> 
        
      <Input name = "username" type="text" value={user.username} label="Username" errors = {errors} onChange = {this.handleChange} />
      {errors.username && <div className="alert alert-danger alert-sm">{errors.username}</div> }

      <Input name = "email" type="text" value={user.email} label="Email" errors = {errors} onChange = {this.handleChange} />
      {errors.email && <div className="alert alert-danger alert-sm">{errors.email}</div> }

      <Input name = "password" type="text" value={user.password} label="Password" errors = {errors} onChange = {this.handleChange} />
      {errors.password && <div className="alert alert-danger alert-sm">{errors.password}</div> }
        
      <button type="submit" className="btn btn-primary btn-sm">Register</button>
    </form>
  </div>;
  }
}
 
export default Register;