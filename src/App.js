import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import ChatWindow from './ChatsApp/ChatWindow';
import Home from "./ChatsApp/Home";
import Login from "./ChatsApp/Login";

function setToken(token){
  console.log("App Token="+token);
}

function getToken(){
  return "sampu";
}

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home token={getToken}/>}/>
    <Route path="/login" element={<Login token={setToken}/>}/>
    <Route path="/chat" element={<ChatWindow/>}/>
    </Routes>
    </Router>
  );
}

export default App;
