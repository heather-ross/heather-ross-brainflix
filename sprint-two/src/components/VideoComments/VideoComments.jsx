import React from 'react';
import './VideoComments.scss';

function VideoComments({currentVideo}) {
    
    return (
        <div className="comments__stream">  
          {!!currentVideo && currentVideo.sort(function(x, y) {return y.timestamp - x.timestamp;})
          .map(comment => { 
            const commentDate = new Date(comment.timestamp);
            return (
              <div className="comments__container" key={comment.id}>
               <div className="avatar comments__avatar-comment"></div>           
                <div className="comments__block">
                  <h5 className="comments__block--name">{comment.name}</h5>
                  <p className="comments__block--date">{commentDate.toLocaleDateString()}</p>
                  <p className="comments__block--comment">{comment.comment}</p>             
                </div>
              </div> 
            )
          })}               
        </div>
    )
}
export default VideoComments
