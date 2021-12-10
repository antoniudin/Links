import React, { Component } from 'react';
import axios from 'axios';
import Input from './input';
import Joi from 'joi-browser';

const apiEndpoint = "https://localhost:5001/api/links/";
class LinkForm extends React.Component {
    
    state = {
        link:{name: '', shorName:''},
        errors: {}
    }

    schema = {
        link:Joi.string().required().email().label("Email"),
      }
    
    validate = () => {
        const errors = {};
        const link = this.state.link.name;
        let url;
        //check the format of link
        try {
          url = new URL(link);
        } catch (_) {
          errors.link="It does not look like a link" 
        }
        // check if the input field is empty
        if (this.state.link.name.trim()==='') 
        errors.link = 'Empty string'
        return Object.keys(errors).length===0 ? null: errors;
    }

    doSubmit = () => {
        const newLink = {...this.state.link}
        newLink.shortName = (Math.random() + 1).toString(36).substring(7)
        this.props.addLink(newLink);
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const errors = this.validate(); 
        this.setState({errors: errors || {} });
        if (errors) return;
        this.doSubmit();
    };

    handleChange = ({currentTarget:input}) => {
        const link = {...this.state.link}
        link[input.name] = input.value;
        this.setState({link});
        console.log(this.state.link)
    }

    render() {         
        const {link,errors} =this.state;
        return <div>
            <form onSubmit={this.handleSubmit}>
                <Input name = "name" value={link.name} label="Link" errors = {errors} onChange = {this.handleChange} />
                {errors.link && <div className="alert alert-danger">{errors.link}</div> }
                <button type="submit" className="btn btn-primary btn-sm m-1">Submit</button>
                <button className="btn btn-secondary btn-sm m-1" onClick={this.props.closeForm}>Cancel</button>
            </form>
        </div>;
    }
}
 
export default LinkForm;