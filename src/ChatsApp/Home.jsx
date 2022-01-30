import React from "react";
import  { Link } from 'react-router-dom';

export default class Home extends React.Component{

    render(){
        return(
            <div align="center">
            <Link to={{pathname:"/login"}}>Login</Link>
            </div>
        );
    }
};