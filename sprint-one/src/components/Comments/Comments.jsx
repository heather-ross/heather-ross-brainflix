import React from 'react'
import '../Comments/Comments.scss'

function Comments() {
    return (
        <div className="comments__stream">
            <article className="comments__container">
              <div className="comments__avatar">
              <div className="comments__block">
                <h5 className="comments__block--name"></h5>
                <date className="comments__block--date"></date>
              </div>
              </div>
            </article>  
        </div>
    )
}

export default Comments
