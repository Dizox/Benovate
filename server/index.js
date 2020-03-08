const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 3636;
const app = express();
const bodyParser = require('body-parser');
const users = require('./routes/UsersList');

app.use(cors());
app.use(bodyParser.json())

const users = {

};