import React from "react";
import "./chatstyle2.css";
import ChatBubble from "./ChatBubble";


export default class ChatBox extends React.Component{

    constructor(props){
        super(props);
        let messages=[
        //     {
        //         "type":"Recv",
        //         "msg":"Hi, how are you?"
        //     },
        //     {
        //            "type":"Sent",
        //            "msg":"I am good, thank you for your chat template"
        //     },
        //     {
        //         "type":"Recv",
        //         "msg":"You are welcome"
        //     },
        //    {
        //        "type":"Sent",
        //        "msg":"I am looking for your next templates"
        //    },
        //    {
        //     "type":"Recv",
        //     "msg":"Ok, thank you-- good day"
        //    },
        //    {
        //        "type":"Sent",
        //        "msg":"Bye, see you Hello?"
        //    }
        ];

        this.state={
            msg:(messages),
            numofmsg:6,
        };
    };

    static getDerivedStateFromProps(nextProps, prevState){
        let newMessage=(nextProps.pendingMsg);
        console.log("newprops="+newMessage)
        prevState.msg.map(
            (item,index)=>{
                console.log("item="+item)
        });

        if(newMessage!==null){
            let newMsgList=prevState.msg;
            let msgno=prevState.numofmsg;
            console.log("pushing newmsg in "+msgno);
            if(!newMsgList.includes(newMessage))
                newMsgList.push(newMessage);
           
            msgno+=1;
            return({
               msg:newMsgList,
               numofmsg:msgno
            })
        }
    }

    render(){

        let msg_display=[]
        this.state.msg.map((item,index)=>{
            console.log(">>>"+JSON.stringify(item)+"<<<");
            if(item!==null) {
                if(item.msg!==""){
                    msg_display.push(<ChatBubble data={item}/>);
                }   
            }
        })

        return(
        <div class="card-body msg_card_body">
            {msg_display}
        </div>
        );
    };
};