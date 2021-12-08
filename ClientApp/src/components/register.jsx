import React from "react";
import Form from './form';
import Joi from 'joi-browser';

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

  render() { 
    const {errors} = this.state;
    return <div className="m-3">
    <form onSubmit={this.handleSubmit}> 
    <div className="form-group">
        <label htmlFor="username">Username</label>
        <input name = "username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" onChange={this.handleChange}/>
        {errors.username && <div className="alert alert-danger alert-sm">{errors.username}</div> }
      </div>
      
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
      <button type="submit" className="btn btn-primary btn-sm">Register</button>
    </form>
  </div>;
  }
}
 
export default Register;