import React from 'react';
import './Comments.scss';
import SingleComment from './SingleComment/SingleComment';

function Comments({currentVideo}) {
  
    return (
      <section className="comments">
        <div className="comments__form-wrap">
          <h5 className="comments__counter">{currentVideo.comments.length} Comments</h5>
          <div className="avatar comments__avatar-form"></div>
            <form className="comments__form" id="commentForm" method="" name="commentForm">
              <label htmlFor="commentInput">
                <h5 className="comments__label">JOIN THE CONVERSATION</h5>
                <textarea className="comments__input" id="commentInput" name="commentInput" placeholder="Add a new comment" required=""></textarea>
              </label>            
              <button className="comments__button" id="commentBtn" type="submit">COMMENT</button>
            </form>
          </div> 
          <SingleComment currentVideo={currentVideo}/>
      </section>
    )
}
export default Comments
