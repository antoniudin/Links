import React, { Component } from 'react';
import Tags from './tags';


const serverName = "https://localhost:5001/"

class Link extends React.Component {
    
    state = {
        tag:{
            name:''
        },
        errors:{}
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    handleChange = ({currentTarget:input}) => {
        const tag = {...this.state.tag}
        tag[input.name] = input.value;
        this.setState({tag});
    }
    

    render() { 
        const {link, tags, delLink, delTag, addTag} = this.props;
        const {tag} = this.state;
        return <div className="linkContainer">
            <div className="linkContainerHeader">
                <div className="linkContainerItem">Short link:</div>
                <a href={serverName+link.shortName} className="linkContainerItem">{link.shortName}</a>

                <button className="linkContainerItem btn btn-warning btn-sm">Go To</button>
                <button onClick={()=>delLink(link.id)} className="linkContainerItem btn btn-danger btn-sm">Delete</button>
            </div>
            <div>Link: {link.name}</div>
            <div>Total visits: <span className="badge badge-primary">{link.visits}</span></div>
                <div className="tagForm">
                    <form onSubmit={this.handleSubmit}>
                    <label htmlFor="tag">Tag:</label>
                    <input 
                    value={tag.name}
                    onChange={this.handleChange}
                    id="tag" 
                    name="name"
                    className="form-control"/>
                    <button onClick={()=>addTag(tag, link.id)} type="submit" className="btn btn-primary btn-sm m-1">+</button>
                    </form>
                </div>


            <div className="tagContainer">
                <Tags link={link} tags={tags} delTag={delTag}/>
            </div>
        </div>
    }
}
 
export default Link;