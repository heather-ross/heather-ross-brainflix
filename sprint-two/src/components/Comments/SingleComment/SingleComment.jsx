import React from 'react';
// import '../../Comments/Comments.scss';

function SingleComment({currentVideoComments}) {
    return (
        <div className="comments__stream">  
          {currentVideoComments.map(comment => { 
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
export default SingleComment