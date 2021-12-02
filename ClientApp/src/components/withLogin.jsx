import React, { Component } from 'react';

function withLogin (Component) {
    return class WithLogin extends React.Component {

        state = {
            user:false
        }
        
        render () {
            return <div><Component 
            {...this.props}
            user={this.state.user}
            /></div>
        }
    }
} 

export default withLogin;