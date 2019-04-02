/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import './add.css';

class Add extends Component {
    constructor(){
        super();
        this.state = {
            Name : "new subscriber",
            Phone : "0000000"
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
            <div>
                <label> Enter the name of the new subscriber : 
                    <input type="text" value = {this.state.Name} onChange = {this.ChangeName}/>
                    </label><br/><br/>
                <label> Phone Number :
                    <input type="Number" value={this.state.Phone} onChange={this.ChangePhone}/>
                </label><br /><br/>
            </div>
        )
    }
}

export default Add;