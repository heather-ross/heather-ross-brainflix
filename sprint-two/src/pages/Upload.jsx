import React, { Component } from 'react'

export default class Upload extends Component {
    render() {
        return (
     <section className="uploads">
         <h1>Upload Video</h1>
        <div className="uploads__form-wrap">
            <form className="uploads__form" id="uploadsForm" method="" name="uploadsForm">
            <label htmlFor="uploadsInput">
              <h5 className="uploads__label">VIDEO THUMBNAIL</h5>
                <div className="uploads__thumbnail"></div>
              </label>
            <label htmlFor="uploadsInput">
              <h5 className="uploads__label">TITLE YOUR VIDEO</h5>
                <input className="uploads__inputTitle" id="uploadsInputTitle" name="uploadsInputTitle" placeholder="Add a title to your video" required="" />
              </label>
              <label htmlFor="uploadsInput">
                <h5 className="uploads__label">ADD A VIDEO DESCRIPTION</h5>
                <textarea className="uploads__inputDesc" id="uploadsInputDesc" name="uploadsInputDesc" placeholder="Add a description of your video" required=""></textarea>
              </label>   
              <button className="uploads__button" id="uploadsDeleteBtn" type="delete">DELETE</button>         
              <button className="uploads__button" id="uploadsBtn" type="submit">PUBLISH</button>
            </form>
          </div> 
      </section>
        )
    }
}
