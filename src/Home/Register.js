import  React, { Component } from "react";

export default class Home extends Component{

    handleSubmit = e => { 
        e.preventDefault();
     
        const data = {
        email: this.email,
        password: this.password,
        roles: this.roles,
        }

        console.log(data);  
        
    } 
    render(){
        return (
            <form onSubmit={this.handleSubmit}>


                <h3> Sign Up </h3>


                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Email" 
                    onChange={e => this.email = e.target.value} /> 
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Password" 
                    onChange={e => this.password = e.target.value} /> 
                </div>

                <div className="form-group">
                    <label>Roles</label>
                    <input type="text" className="form-control" placeholder="Roles" 
                    onChange={e => this.roles = e.target.value} /> 
                </div>

                <button className="btn btn-primary btn-block">Sign Up</button>


            </form>
        )
    }
}