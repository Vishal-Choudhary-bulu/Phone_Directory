/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import './add.css';

class Add extends Component {
    
    state = {
        Name: "",
        Phone: ""
    }
    
    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    submitted = (e) => {
        this.props.AddSub(this.state.Name,this.state.Phone);
        this.setState({Name: "",Phone: ""});
    }
    
    render() {
        return (
            <div className = "AddSub">
                <div className = "newdata">
                    <h3>Name : </h3> 
                    <input type="text" name = "Name" value = {this.state.Name} onChange = {this.onChange}/><br/>
                </div>
                <div className="newdata">
                    <h3>Phone : </h3>
                    <input type="Number" name="Phone" value = {this.state.Phone} onChange={this.onChange}/><br />
                </div>
                <button className="addbtn" onClick = {this.submitted}>ADD</button>
            </div>
        )
    }
}

export default Add;