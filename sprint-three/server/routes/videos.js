const express = require('express');
// const fs = require('fs');
const router = express.Router()
const videoData = require('../data/videos.json');

router.route('/')
.get((_req,res) => {
    const videos = videoData.map(video => {
        let singleVideo = {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image,
        }
        return singleVideo
    })
    res.status(200).send(videos)
})

 router.route('/:videoId')
.get((req, res) => {
    let videoId = req.params.videoId;
    let videoDetails = videoData.find(video => {
        return video.id === videoId 
    })
    res.status(201).send(videoDetails)
})

// .post((req, res) => {

// })


module.exports = router