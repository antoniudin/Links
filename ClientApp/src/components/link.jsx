import React, { Component } from 'react';
import Tags from './tags';
import Joi from 'joi-browser';
import Input from './input';

const serverName = "https://localhost:5001/"

class Link extends React.Component {
    
    state = {
        tag:{
            name:''
        },
        errors:{},
        showAddTagField: false
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    doSubmit = () => {

    }

    handleChange = ({currentTarget:input}) => {
        const tag = {...this.state.tag}
        tag[input.name] = input.value;
        this.setState({tag});
    }

    handleShowAddTagField = () => {
        const showAddTagField = true
        this.setState({showAddTagField})
    }

    handleHideAddTagField = () => {
        const showAddTagField = false
        this.setState({showAddTagField})
    }

    render() { 
        const {link, tags, delLink, delTag, addTag} = this.props;
        const {tag, errors} = this.state;
        return <div className="linkContainer">
            <div className="linkContainerHeader">
                <div className="linkContainerItem">Short link:</div>
                <a href={serverName+link.shortName} className="linkContainerItem">{link.shortName}</a>
                <button className="linkContainerItem btn btn-warning btn-sm">Go To</button>
                <button onClick={()=>delLink(link.id)} className="linkContainerItem btn btn-danger btn-sm">Delete</button>
                {!this.state.showAddTagField && <button className="btn btn-sm btn-primary" onClick={this.handleShowAddTagField}>Add tag</button>}
            </div>
            <div>Link: {link.name}</div>
            <div>Total visits: <span className="badge badge-primary">{link.visits}</span></div>
                {this.state.showAddTagField &&
                <div className="addTagContainer">
                <Input style={{margin:0}} name = "name" type="text" value={tag.name} errors = {errors} placeholder="Add a new tag" onChange = {this.handleChange} />
                <button onClick={()=>addTag(tag, link.id)} type="submit" className="btn btn-primary m-1">+</button>
                <button className="btn btn-danger m-1" onClick={this.handleHideAddTagField}>x</button>
                </div>
                }
                <Tags link={link} tags={tags} delTag={delTag}/>
        </div>
    }
}
 
export default Link;