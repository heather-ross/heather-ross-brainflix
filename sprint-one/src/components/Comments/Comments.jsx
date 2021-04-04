import React from 'react'
import './Comments.scss'

function Comments({currentVideo}) {
  
    return (
      <section className="comments">
        <div className="comments__form-wrap">
          <h5 className="comments__counter">{currentVideo.comments.length} Comments</h5>
            <div className="avatar comments__avatar-form"></div>
            <form className="comments__form" id="commentForm" method="" name="commentForm">
              <label htmlFor="commentInput">
                <h5 className="comments__label">JOIN THE CONVERSATION</h5>
                <textarea className="comments__add-comment" id="commentInput" name="commentInput" placeholder="Add a new comment" required=""></textarea>
              </label>           
               
              <button className="comments__button" id="commentBtn" type="submit">COMMENT</button>
            </form>
            </div> 
        <div className="comments__stream">  
          {currentVideo.comments.map((comment) => { 
            const commentDate = new Date(comment.timestamp);
            return (
            <div className="comments__container">
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
      </section>
    )
}

export default Comments
