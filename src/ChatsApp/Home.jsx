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
        let token=this.state.homeToken;

        if(token!==null){
            return(
                <div align="center">
                    {/* Token:[{this.state.homeToken}] */}
            <Link to={{pathname:"/logout"}}>Logout</Link><br></br>
            <Link to={{pathname:"/chat"}}>ChatsApp</Link>
            </div>
            );
        }
        return(
            <div align="center">
                 {/* Token:{this.state.token} */}
            <Link to={{pathname:"/login"}}>Login</Link>
            </div>
        );
    }
};