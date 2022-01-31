import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import ChatWindow from './ChatsApp/ChatWindow';
import Home from "./ChatsApp/Home";
import Login from "./ChatsApp/Login";



export default class App extends React.Component {

  constructor(){
    super();
    this.state={token:""};
    this.setToken=this.setToken.bind(this);
  }

  setToken(tok){
    console.log("App Token="+tok);
    this.setState({
      token:tok
    });
  }

  render(){
    return (
      <Router>
      <Routes>
      <Route path="/" element={<Home token={this.state.token}/>}/>
      <Route path="/login" element={<Login token={this.setToken}/>}/>
      <Route path="/logout" element={<Login token={this.setToken} logout="true"/>}/>
      <Route path="/chat" element={<ChatWindow/>}/>
      </Routes>
      </Router>
    );
  }
}
