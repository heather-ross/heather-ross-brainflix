import React from 'react'
import './SingleVideo.scss';
import {Link} from "react-router-dom";

function SingleVideo ({nextVideos, currentVideoId}) {

return (
  <>
  {nextVideos
    .filter(singleVideo => singleVideo.id !== currentVideoId)
    .map(singleVideo => {
   return (
    <Link to={`/video/${singleVideo.id}`} key={singleVideo.id}>
     <div className="videoList__block">
        <img className="videoList__img" src={singleVideo.image} alt="bike trick"/>
        <div className="videoList__textBox">
          <h5 className="videoList__textBox--title">{singleVideo.title}</h5>
          <p className="videoList__textBox--channel">{singleVideo.channel}</p>
        </div>
      </div>  
    </Link>               
    )
  })
}
</>
)
}
export default SingleVideo

//onclick now needs to be lifecycle 'update'
