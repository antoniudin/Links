import React, { Component } from 'react';
import Tag from './tag';

class Tags extends React.Component {
    render() { 
        return <div className="tagContainer">
            <div>Tags:</div>
            {this.props.tags.map(tag => <Tag link={this.props.link} key={tag.id} tag={tag} delTag={this.props.delTag} />)} 
        </div>;
    }
}
 
export default Tags;