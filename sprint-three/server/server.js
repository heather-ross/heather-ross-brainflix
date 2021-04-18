require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const videos = require('./routes/videos');
// const comments = require('./routes/comments')

const port = process.env.PORT

app.use(cors());
app.use(express.json())

app.use((_req,_res, next) => {
    next()
})
app.use('/videos',videos)
// app.use('/comments',comments)
app.get('/', (req,res,next) => {
    next();
})

app.listen(port, error => error? console.error(error):console.info(`I am running ${port}`))