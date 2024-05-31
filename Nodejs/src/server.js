const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;
const cors = require('cors');

const server = express();
server.use(bodyParser.json());

server.use(cors());


//Establish the database connection
const db = require('./config/db');
const session = require("express-session");

const route = require("./routes");
db.connect().then(() => console.log('connected successfully!!'));

server.use(express.urlencoded(
    {extended: true}
));
server.use(express.json());

route(server);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})