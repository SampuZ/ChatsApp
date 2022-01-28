import React from "react";
export default class ChatBubble extends React.Component{

    constructor(props){
        super(props);
        let message=(props.data);
        console.log("NEw MEssage="+JSON.stringify(message));
        let msgtype="";
        let msgdata="";
        if(message!=null){
            msgtype=message.type;
            msgdata=message.msg;
        }
        let today = new Date(),
        timestamp = today.getHours() + ':' + today.getMinutes();
        console.log(timestamp);
        this.state={
           type:msgtype,
           msg:msgdata,
           timestamp:timestamp,
           upload:0
        };
    }

    render(){

        let ChatBubble=(<div></div>);
        if(this.state.type==="Sent"){
            ChatBubble=(
                <div class="d-flex justify-content-end mb-4">
                        <div class="msg_cotainer_send">
                            {this.state.msg}
                            <span class="msg_time_send">{this.state.timestamp}</span>
                        </div>
                        <div class="img_cont_msg">
                        <img src="" class="rounded-circle user_img_msg"/>
                        </div>
                </div>
            );
        }else if(this.state.type==="Recv"){
            ChatBubble=(
                <div class="d-flex justify-content-start mb-4">
                <div class="img_cont_msg">
                    <img src="" class="rounded-circle user_img_msg"/>
                </div>
                <div class="msg_cotainer">
                    {this.state.msg}
                    <span class="msg_time">{this.state.timestamp}</span>
                </div>
            </div>
            );
        }
        

        return(
        <div>
         {ChatBubble}
        </div>
        );
    }
};