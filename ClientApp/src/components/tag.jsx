import React, { Component } from 'react';

class Tag extends React.Component {
    
    render() { 
        return <div>
                    <div>
                        <span className = "badge-pill badge-warning">{this.props.tag.name}</span>
                        <button className="customButton" onClick={()=>this.props.delTag(this.props.tag.id, this.props.link.id)}>x</button>
                    </div>
            </div>
    }
}
 
export default Tag;