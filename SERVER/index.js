const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Middleware 
const reactDom = require('react-dom');
const { validate } = require('./inspector');
const { showUserList, startWebSocket } = require('./chatServer');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
    console.log('=======================>')
    console.log(req.body);
    console.log('=======================>')
    console.log("Received new connection: "+req.body.uid)

    res.send(validate(req.body));
});

app.listen(8080, () => {
  console.log('API is running on http://localhost:8080/login');
  showUserList();
});

startWebSocket(8081);