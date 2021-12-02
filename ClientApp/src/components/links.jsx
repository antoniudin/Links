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
        links:[],
        tags:[]
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    handleAddTag = (tag, linkId) => {
        console.log("Delete tag: " + tag + "Link id: " + linkId)
        const tags = this.state.tags.filter(t=> t.linkId ==linkId)
        console.log(this.state.tags)
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
        console.log(this.state.tags)
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
            {!showAddField && <button className="btn btn-sm btn-warning m-1 showButton" onClick={this.handleShowLinkForm}>+</button>}
            
            {showAddField && <div className="linkFormPanel m-1"><LinkForm 
            links={links} 
            addLink={this.handleAddLink}
            closeForm = {this.handleHideLinkForm}
            /></div>}
            
            <form onSubmit={this.handleSubmit}>
                <div className="form-group m-1">
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

            <p className="m-2">Total amount of links: {links.length}</p>
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