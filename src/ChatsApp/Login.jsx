import React from 'react';
import { Link, Navigate   } from 'react-router-dom';
import "./login.css";

async function loginUser(credentials) {
  console.log(JSON.stringify(credentials));
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
        this.state = { redirect: null };
        
        if(props.logout=="true"){
          this.props.setToken("");
          console.log("Redirect>");
          this.setState({ redirect: "/" });
        }
        this.userid=React.createRef();
        this.passwd=React.createRef();        
    }

    async handleSubmit(e) {
        e.preventDefault();

        const tokenJSON=await loginUser({
          uid:this.userid.current.value,
          pwd:this.passwd.current.value
        });
        console.log("Response:-"+JSON.stringify(tokenJSON))
        this.props.setToken(tokenJSON.token);
        this.setState({ redirect: "/chat" });
    }
  
  render(){
    console.log("Redirect to "+this.state.redirect);
    if (this.state.redirect!==null) {
      return <Navigate to={this.state.redirect} />
    }
    return(
        <div align="center">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <p>Username</p>
            <input type="text" ref={this.userid} required/>
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