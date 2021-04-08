import React from 'react'
import './VideoPost.scss';
import iconViews from '../../assets/Icons/Icon-views.svg';
import iconLikes from '../../assets/Icons/Icon-likes.svg';

function VideoPost({currentVideo}) {
    const videoDate = new Date(currentVideo.timestamp);
    return (
        <article className="post">
          <header className="post__header">
            <h2 className="post__header--title">{currentVideo.title}</h2>
              <div className="post__flex">
                <div className="post__row">
                  <h4 className="post__row--subtitle">By {currentVideo.channel}</h4>
                  <p className="post__row--date">{videoDate.toLocaleDateString()}</p>
                </div>  
                <div className="post__row">
                  <img className="post__row--icon" src={iconViews} alt="eye icon"/>
                  <p className="post__row--count">{currentVideo.views}</p>
                  <img className="post__row--icon" src={iconLikes} alt="heart icon"/>
                  <p className="post__row--count">{currentVideo.likes}</p>
                </div> 
              </div>    
          </header>
          <p className="post__content">{currentVideo.description}</p>
        </article>
      )
 }

export default VideoPost