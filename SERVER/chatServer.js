const clients=[];

const generateUID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};


function addChatUser(data) {
    clients.push(data);
    showUserList();
};

function showUserList(){
    console.log("clients:-"+clients);
    for(var i=0;i<clients.length;i++){
        console.log(clients[i]);
    }
};

module.exports={addChatUser,showUserList};