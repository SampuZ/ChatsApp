const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Middleware 

const app = express();
app.use(bodyParser.json());
app.use(cors());

const clients={};
const generateUID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};


app.post('/login', (req, res) => {
    console.log('=======================>')
    console.log(req.body.uid);
    console.log('=======================>')
    console.log("Received new connection from "+req.origin)
    res.send({
      token: 'test123'
    });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));