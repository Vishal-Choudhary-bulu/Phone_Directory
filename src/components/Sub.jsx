/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import './sub.css';

class Sub extends Component {
    render() {
        const {Name, Phone, id} = this.props.sub;
        return (
            <div className = "subDiv">
                <p className="listSubName" >{Name} </p> 
                <p className="listSubPhone"> &#9742;  {Phone}</p>
                <button className="delbtn" onClick = {this.props.Delete.bind(this,id)}>DELETE</button>
            </div>
        )
    }
}

export default Sub;