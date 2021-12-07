import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router';
import Links from './components/links';
import Menu from './components/menu';
import Login from './components/login';
import Logout from './components/Logout';
import Register from './components/register';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;
  
  state= {
    user:'',
    userLogin:true
  }

  componentDidMount() {
    const user = localStorage.getItem('user')
    const userLogin = localStorage.getItem('userLogin')
    console.log(user)
    this.setState({user})
    this.setState({userLogin})
  }

  render () {
    const {user} = this.state;
    const userLogin = localStorage.getItem('userLogin')
    return (
      <React.Fragment>
       <Menu userLogin={userLogin} user = {user}/>
       <div className="content">
        <Switch>        
            <Route path="/page/links" render = {props=> {
            if(!userLogin) return <Redirect to="/page/login"/>
            return <Links />}} />

            <Route path="/page/logout" render = {props=> {
            if(!userLogin) return <Redirect to="/page/login"/>
            return <Logout userLogin={userLogin}/>}} />

            <Route path="/page/reg" render={props => <Register userLogin={this.userLogin}/>} />

            <Route path="/" render={props => <Login userLogin={this.userLogin}/>} />

            
          </Switch>
       </div>
      </React.Fragment>
    );
  }
}
