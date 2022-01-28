import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  
    constructor(){
        super();
        this.userid=React.createRef();
        this.passwd=React.createRef();

    }

    loginUser(credentials) {
        return fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
        .then(data => data.json())

    }

    handleSubmit(e) {
        e.preventDefault();

        const token=this.loginUser({
          uid:this.userid.current.value,
          pwd:this.passwd.current.value
        });
        // setToken(token);
    }
  
    render(){
    return(
        <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <p>Username</p>
            <input type="text" ref={this.userid}/>
          </label>
          <br></br>
          <label>
            <p>Password</p>
            <input type="password" ref={this.passwd}/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
         <Link to={{pathname:"/"}}>Home</Link>
         </div>
      );
  }
};