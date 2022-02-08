const { addChatUser } = require("./chatServer");

function logd(data){
    console.log(data);
}

function validate(data){
    logd("uid:-"+data.uid);
    logd("pwd:-"+data.pwd);
    var chatName="";
    if(data.uid=="sampu"){
        chatName="Anupam";
    }
    if(data.uid=="pluto"){
        chatName="Pluto";
    }

    if(chatName!=="")
        addChatUser(chatName);
    else
        addChatUser(data.uid);
    
    return {
        token:"sampu",
        cname:chatName
    }
}

module.exports={validate};