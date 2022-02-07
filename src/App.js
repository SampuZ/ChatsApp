import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import ChatWindow from './ChatsApp/ChatWindow';
import Home from "./ChatsApp/Home";
import Login from "./ChatsApp/Login";



export default class App extends React.Component {

  constructor(){
    super();
    let savedToken=this.getToken();
    this.state={token:savedToken};
    this.setToken=this.setToken.bind(this);
  }

  setToken(tok){
    console.log("App Token="+tok);
    this.setState({
      token:tok
    });
    sessionStorage.setItem('token', tok);
  }

  getToken(){
    const tokenString = sessionStorage.getItem('token');
    console.log("Got Token="+tokenString);
    if(tokenString===undefined)
      return "";
    return tokenString;
  }  

  render(){
    return (
      <Router>
      <Routes>
      <Route path="/" element={<Home token={this.state.token} setToken={this.setToken}/>}/>
      <Route path="/login" element={<Login token={this.setToken} setToken={this.setToken}/>}/>
      <Route path="/logout" element={<Login token={this.setToken} setToken={this.setToken} logout="true"/>}/>
      <Route path="/chat" element={<ChatWindow/>}/>
      </Routes>
      </Router>
    );
  }
}
