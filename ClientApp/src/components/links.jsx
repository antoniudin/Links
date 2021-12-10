import React, { Component } from 'react';
import axios from 'axios';
import LinkForm from './linkForm';
import Link from './link';
import Login from './login';

const apiEndpoint = "https://localhost:5001/api/links/"

class Links extends React.Component {
    
    state = {
        link: {
            name:'',
            shortName:''
          },
        showAddField:false,
        links:[]
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleAddTag = async (newTag, linkId) => {
        const promise = await axios.post(apiEndpoint + linkId + "/" + newTag.name)
        const {data:links} = await axios.get(apiEndpoint);
        this.setState({links})
    }
    
    handleAddLink = async (newLink) => {
        const {data:link} = await axios.post(apiEndpoint, newLink)
        const {data:links} = await axios.get(apiEndpoint);
        this.setState({links})
    }    

    async componentDidMount() {
        const {data:links} = await axios.get(apiEndpoint);
        this.setState({links})
    }

    handleShowLinkForm = () => {
        const showAddField = true;
        this.setState({showAddField});
    }

    handleHideLinkForm = () => {
        const showAddField = false;
        this.setState({showAddField});
    }

    handleTagDelete = async (id) => {
        const {data:tag} = await axios.delete(apiEndpoint+"tags/"+id)
        const {data:links} = await axios.get(apiEndpoint);
        this.setState({links})
    }
    
    handleDeleteLink = async (id) => {
        const {data:link} = await axios.delete(apiEndpoint+id)
        const links = this.state.links.filter(link=> link.id!==id)
        this.setState({links})
    }

    render() {
        const {showAddField, links} = this.state;
        return <div className="main">
            <div className="rightPanel">
            {!showAddField && <button className="btn btn-sm btn-warning showButton" onClick={this.handleShowLinkForm}>+</button>}
            
            {showAddField && <div className="linkFormPanel"><LinkForm 
            links={links} 
            addLink={this.handleAddLink}
            closeForm = {this.handleHideLinkForm}
            /></div>}
            
            <form onSubmit={this.handleSubmit}>
                <div className="">
                    <label htmlFor="input1">Search:</label>
                    <input 
                    // value={link.name}
                    // onChange={this.handleChange}
                    // id="input1" 
                    // name="name"
                    // error={errors.link}
                    className="form-control"/>
                </div>
            </form>

            <p className="m-2">Total number of links: {links.length}</p>
            {links.map(link=>
                <Link key={link.id}
                tags = {link.tags}
                link={link}
                test={this.test}
                delTag={this.handleTagDelete}
                addTag = {this.handleAddTag}
                addLink={this.handleAddLink}
                delLink={this.handleDeleteLink}
                />
                )}
            </div>
        </div>;
    }
}
 
export default Links;