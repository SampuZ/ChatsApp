import React from "react";

export default class ChatInputBox extends React.Component{

    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.sendMessage = this.sendMessage.bind(this);
        console.clear();
    }


    sendMessage(){
        console.log("sending msg="+this.myRef.current.value)
        this.props.hasPendingMessage(this.myRef.current.value);
        this.myRef.current.value=''
    }

    render(){
        return(
        <div>
       <div class="card-footer">
            <div class="input-group">
                    <div class="input-group-append">
                        <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
                    </div>
                    <textarea ref={this.myRef}
                    class="form-control type_msg" placeholder="Type your message..."></textarea>
                    <div class="input-group-append">
                        <span class="input-group-text send_btn" onClick={this.sendMessage}><i class="fas fa-location-arrow"></i></span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
};