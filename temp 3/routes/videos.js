const express = require('express');
const router = express.Router()
const videoData = require('../data/videos.json');

router.route('/')
.get((_req,res) => {
    res.status(200).send(videoData)
})
 router.route('/video/:videoId')
.get((_req, res) => {
    console.log(req.params.id)
    res.status(201).send('Created')
})

// .post((req, res) => {

// })


module.exports = router