const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const videoData = require('../data/videos.json');
const videoRoute = express.Router();
videoRoute.use(express.json());

videoRoute.get('/', (_req,res) => {
    const videos = videoData.map(video => {
        return {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image,
        }    
    })
    res.status(200).send(videos)
})

videoRoute.get('/:videoId', (req, res) => {
    let videoId = req.params.videoId;
    let videoDetails = videoData.find(video => {
        return video.id === videoId 
    })
    res.status(201).send(videoDetails)
})

videoRoute.post('/', (req, res) => {
    const { title, image, description, timestamp } = req.body;
    console.log(req.body)
    videoData.push({
        id: uuid.v4(),
        title: title,
        channel: 'channel', 
        image: image, 
        description: description, 
        views: 0, 
        likes: 0, 
        duration: 'duration', 
        timestamp: timestamp, 
        comments: [],
    });
    fs.writeFileSync('data/videos.json', JSON.stringify(videoData));
    res.json(videoData)
})
// videoRoute.delete('/video', (req, res) => {
//     const {videoId} = req.body;
//     const index = videodata.findIndex(video => video.id === videoId);
//     const deleteVideo = videoData[index];
//     videoData.splice(index, 1);
//     res.json(deleteVideo);
// })


module.exports = videoRoute