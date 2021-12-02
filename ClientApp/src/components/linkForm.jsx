import React, { Component } from 'react';
import axios from 'axios';

const apiEndpoint = "https://localhost:5001/api/links/";
class LinkForm extends React.Component {
    
    state = {
        link:{
            name: '',
            shorName:'',
        },
        errors: {
        }
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

   

    handleSubmit = e => {
        e.preventDefault();
        
        const errors = this.validate(); 
        this.setState({errors: errors || {} });
        if (errors) return;
        
        const newLink = {...this.state.link}
        newLink.shortName = (Math.random() + 1).toString(36).substring(7)
        this.props.addLink(newLink);
    };

    handleChange = ({currentTarget:input}) => {
        const link = {...this.state.link}
        link[input.name] = input.value;
        this.setState({link});
    }

    render() {         
        const {link,errors} =this.state;
        return <div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="input1">Link:</label>
                    <input 
                    value={link.name}
                    onChange={this.handleChange}
                    id="input1" 
                    name="name"
                    error={errors.link}
                    className="form-control"/>
                </div>
                {errors.link && <div className="alert alert-danger">{errors.link}</div> }

                <button type="submit" className="btn btn-primary btn-sm m-1">Submit</button>
                <button className="btn btn-secondary btn-sm m-1" onClick={this.props.closeForm}>Cancel</button>
            </form>
        </div>;
    }
}
 
export default LinkForm;