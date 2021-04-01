import React from 'react'
import './Post.scss';

function Post() {
    return (
        <article className="post">
            <header className="post__header">
                <h2 className="post__header--title">BMX Rampage: 2018 Highlights</h2>
                <h4 className="post__header--subtitle">by Red Cow</h4>
            </header>
            <p className="post__content">On a gusty day in Southern Utah, a group of 25 daring mountain bikers 
                blew the doors off what is possible on two wheels, unleashing some of 
                the biggest moments the sport has ever seen. While mother nature only 
                allowed for one full run before the conditions made it impossible to ride, 
                that was all that was needed for event veteran Kyle Strait, who won the 
                event for the second time -- eight years after his first Red Cow Rampage 
                title.
            </p>
        </article>
    )
}

export default Post
