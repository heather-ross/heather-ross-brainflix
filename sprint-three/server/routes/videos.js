const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const videoData = require('../data/videos.json');
const videoRoute = express.Router();
videoRoute.use(express.json());

videoRoute.get('/', (_req,res) => {
    const newVideo = videoData.map(video => {
        return {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image,
        }    
    })
    res.status(200).send(newVideo)
})

videoRoute.get('/:videoId', (req, res) => {
    let videoId = req.params.videoId;
    let videoDetails = videoData.find(video => {
        return video.id === videoId 
    })
    res.status(201).send(videoDetails)
 })
 
videoRoute.post('/', (req, res) => {
    const { title, description } = req.body;
    videoData.push({
        id: uuid.v4(),
        title: title,
        channel: 'Heather Ross', 
        image: 'http://localhost:8080/images/upload-video-preview.jpg', 
        description: description, 
        views: 22, 
        likes: 20, 
        duration: 'duration', 
        timestamp: Date.now(), 
        comments: [
            {
            name: "Micheal Lyons",
            comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
            id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
            likes: 0,
            timestamp: 1545162149000
            }, 
            {
            name: "Gary Wong",
            comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
            id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
            likes: 0,
            timestamp: 1544595784046
            }, 
            {
            name: "Theodore Duncan",
            comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
            id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
            likes: 0,
            timestamp: 1542262984046
            }]
    });
    fs.writeFileSync('data/videos.json', JSON.stringify(videoData));
    res.json(videoData)
    })
    
    
module.exports = videoRoute