const express = require('express')
const fs = require('fs');
const path = require('path');

const core = require('./core.js');
const app = express()
const port = 3000
const core_ = core.setup("public_html");

app.use(core_.router)

app.use(express.static('public_html'))
app.listen(port);