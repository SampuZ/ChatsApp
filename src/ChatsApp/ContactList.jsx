import React from "react";
import "./chatstyle2.css";
import Contacts from "./Contacts";
import axios from 'axios';
  

export default class ContactList extends React.Component{

    constructor(props){
        super(props);
        this.state={users:[]}
        const response = axios.get(
            'http://localhost:8080/contact', {
        transformResponse: res => res 
        }).then(response => {
            let userList=[];
            console.log("New Data:--"+response.data);
            let data=JSON.parse(response.data);
            data.map((item,index)=>{
                console.log("tiem="+JSON.stringify(item));
                userList.push(item.chatname);
            })
            this.setState({
                users:userList
            });
        });
    }

    render(){
        let userlist=this.state.users;
        let contact_display=[];
       
       
        if(userlist!==null)
            userlist.forEach(element => {
                console.log(element);
                contact_display.push(<li class="passive"><Contacts name={element} status="online"/></li>);
            });
       
        return(
           <div>
              {/* <li class="active">	
                        <Contacts name="Sampu" status="online"/>
		                </li> */}
						{contact_display}
           </div>
        );
    }
};