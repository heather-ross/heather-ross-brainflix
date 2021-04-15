const express = require('express');
const app = express();
const cors = require('cors');

const videos = require('./routes/videos');
// const comments = require('./routes/comments')
require('dotenv').config();
const port = process.env.PORT

app.use(cors());
app.use(express.json())

app.use((req,_res, next) => {
    console.log(`The path ${req.path} was targeted at ${new Date().toLocaleTimeString()}`)
    next()
})
app.use('/videos',videos)
// app.use('/comments',comments)


app.listen(port, error => error? console.error(error):console.info(`I am running`))