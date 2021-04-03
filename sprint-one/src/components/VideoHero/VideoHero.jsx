import React from 'react'
import './VideoHero.scss';

function VideoHero({currentVideo}) {
    return (
        
        <video className="heroVideo" poster={currentVideo.image} controls></video>
    )
}
export default VideoHero