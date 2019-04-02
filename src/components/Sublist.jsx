/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import './sublist.css';
import Sub from './Sub.jsx';

class Sublist extends Component {
    constructor(){
        super();
        this.state = {
            subs : [
                { Name: 'ram', Phone: '10101010' },
                { Name: 'sam', Phone: '11111111' },
                { Name: 'ram', Phone: '20202020' }
            ]
        }
    }
    render() {
        return (
            <div className = "subList">
                <h3>---list of subscribers---</h3>
                {this.state.subs.map((s,i)=> <Sub Name = {s.Name} Phone = {s.Phone} key = {i}/>)}
            </div>
        )
    }
}

export default Sublist;