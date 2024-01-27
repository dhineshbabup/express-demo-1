const express = require('express');
const app = express();
const router = require('./routes/route')
const path = require('path')
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded());
app.use(router);
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname,"view","404.html"));
})
app.listen(3000)