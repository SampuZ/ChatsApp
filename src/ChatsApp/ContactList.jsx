import React from "react";
import "./chatstyle2.css";
import Contacts from "./Contacts";

export default class ContactList extends React.Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
           <div>
              <li class="active">	
                        <Contacts name="Sampu" status="online"/>
		                </li>
						<li>
						<Contacts name="Rafi" status="online"/>
						</li>
						<li>
						<Contacts name="Pluto" status="offline"/>
						</li>
           </div>
        );
    }
};