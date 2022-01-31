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
        if(this.state.homeToken!==undefined){
            return(
                <div align="center">
            <Link to={{pathname:"/logout"}}>Logout</Link>
            </div>
            );
        }
        return(
            <div align="center">
            <Link to={{pathname:"/login"}}>Login</Link>
            </div>
        );
    }
};