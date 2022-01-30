import React from 'react';
import { Link, Navigate   } from 'react-router-dom';
import "./login.css";

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}


export default class Login extends React.Component {
  
    constructor(props){
        super(props);
        this.userid=React.createRef();
        this.passwd=React.createRef();
        this.state = { redirect: null };
    }

    setToken(token){
      this.props.token=token;
    }

    async handleSubmit(e) {
        e.preventDefault();

        const token=await loginUser({
          uid:this.userid.current.value,
          pwd:this.passwd.current.value
        });
        console.log("Response:-"+JSON.stringify(token))
        this.setToken(token);
        this.setState({ redirect: "/chat" });
    }
  
  render(){
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }
    return(
        <div align="center">
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