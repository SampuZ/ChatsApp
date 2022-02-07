import React from "react";
import  { Link } from 'react-router-dom';

export default class Home extends React.Component{

    constructor(){
        super();
        this.state={
            homeToken:""
        };
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log("Home Token:"+nextProps.token);
        return({
            homeToken:nextProps.token
         })
    }

    render(){
        if(this.state.homeToken!="undefined" &&
            this.state.homeToken!=""){
            return(
                <div align="center">
            <Link to={{pathname:"/logout"}}>Logout</Link><br></br>
            <Link to={{pathname:"/chat"}}>ChatsApp</Link>
            </div>
            );
        }
        return(
            <div align="center">
                {this.state.token}
            <Link to={{pathname:"/login"}}>Login</Link>
            </div>
        );
    }
};