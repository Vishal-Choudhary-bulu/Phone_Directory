/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import './sublist.css';
import Sub from './Sub.jsx';

class Sublist extends Component {

    render() {
        return (
            <div className = "subList">
                <h3>---list of subscribers---</h3>
                {this.props.subs.map((s,i)=> <Sub Name = {s.Name} Phone = {s.Phone} key = {s.id}/>)}
            </div>
        )
    }
}

export default Sublist;