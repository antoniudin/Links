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
        
        return <div className="linkContainer">
            <a href={serverName+link.shortName} className="">{link.shortName}</a>
            <button onClick={()=>delLink(link.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label htmlFor="tag">Tag:</label>
                <input 
                value={this.state.tag.name}
                onChange={this.handleChange}
                id="tag" 
                name="name"
                className="form-control"/>
                <button onClick={()=>addTag(this.state.tag, link.id)} type="submit" className="btn btn-primary btn-sm m-1">+</button>
                </div>
                </form>
            
            <p>Total visits: <span className="badge badge-primary">{link.visits}</span></p>
            <p>{link.name}</p>
            <div className="tagContainer">
                <Tags link={link} tags={tags} delTag={delTag}/>
            </div>
        </div>
    }
}
 
export default Link;