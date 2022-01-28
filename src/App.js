import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import ChatWindow from './ChatsApp/ChatWindow';
import Home from "./ChatsApp/Home";
import Login from "./ChatsApp/Login";

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/chat" element={<ChatWindow/>}/>
    </Routes>
    </Router>
  );
}

export default App;
