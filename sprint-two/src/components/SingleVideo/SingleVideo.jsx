import React from 'react'
import './SingleVideo.scss';

function SingleVideo ({image, title, channel, updateVideo, id}) {
 
   return (
     <div className="videoList__block" onClick={()=>(updateVideo(id))}>
        <img className="videoList__img" src={image} alt="bike trick"/>
        <div className="videoList__textBox">
          <h5 className="videoList__textBox--title">{title}</h5>
          <p className="videoList__textBox--channel">{channel}</p>
        </div>
      </div>                 
    )
}
export default SingleVideo

//onclick now needs to be lifecycle 'update'
