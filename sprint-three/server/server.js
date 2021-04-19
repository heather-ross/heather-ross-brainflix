require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const videos = require('./routes/videos');
const port = process.env.PORT

app.use(cors());
app.use(express.json())
app.use(express.static('./public'));

app.use((_req,_res, next) => {
    next()
})
app.use('/videos',videos);

app.listen(port, error => error? console.error(error):console.info(`I am running ${port}`))