/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import './add.css';

class Add extends Component {
    constructor(){
        super();
        this.state = {
            Name : "",
            Phone : ""
        }

        this.ChangeName = this.ChangeName.bind(this);
        this.ChangePhone = this.ChangePhone.bind(this);
    }
    ChangeName(e){
        this.setState({Name: e.target.value});
    }

    ChangePhone(e){
        this.setState({Phone: e.target.value});
    }
    
    render() {
        return (
            <div className = "AddSub">
                <div className = "newdata">
                    <h3>Name : </h3> 
                    <input type="text" value = {this.state.Name} onChange = {this.ChangeName}/><br/>
                </div>
                <div className="newdata">
                    <h3>Phone : </h3>
                    <input type="Number" value={this.state.Phone} onChange={this.ChangePhone}/><br />
                </div>
                <input type="submit" value="ADD" className="addbtn"/>
            </div>
        )
    }
}

export default Add;