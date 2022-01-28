import React from "react";
import "./chatstyle2.css";

export default class Contacts extends React.Component{

    // constructor(props){
    //     super(props);
    // }

    render(){
		//  var statusIcon="";
		// if(this.props.status=="online"){
		// 	statusIcon="online_icon";
		// }else{
		// 	statusIcon="offline_icon";
		// }

        return(
        <div>
			<div class="d-flex bd-highlight">
				<div class="img_cont">
					<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img"/>
					<span class="online_icon"></span>
				</div>
				<div class="user_info">
					<span>{this.props.name}</span>
					<p>{this.props.status}</p>
				</div>
			</div>
        </div>
        );
    }
};