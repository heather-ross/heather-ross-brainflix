import React from 'react';
import './Form.scss';

function Form() {
  return(
    <div className="comments__form-wrap">
      <h5 className="comments__counter">3 Comments</h5>
          <div className="comments__avatar comments__avatar--form"></div>
          <form className="comments__form" id="commentForm" method="post" name="commentForm">
            <label htmlFor="commentInput">
              <h5 className="comments__label">JOIN THE CONVERSATION</h5>
            </label>           
            <textarea className="comments__add-comment" id="commentInput" name="commentInput" placeholder="Add a new comment" required=""></textarea> 
            <button className="comments__button" id="commentBtn" type="submit">COMMENT</button>
          </form>
    </div> 
  )  
}
export default Form;