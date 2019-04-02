/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import './sub.css';

class Sub extends Component {
    render() {
        return (
            <div className = "subDiv">
                <p className="listSubName" >{this.props.Name} </p> 
                <p className="listSubPhone"> &#9742;  {this.props.Phone}</p>
                <button className="delbtn">DELETE</button>
            </div>
        )
    }
}
Sub.defaultProps = {
    Name: "New Subscriber",
    Phone: "0000000"
}

export default Sub;