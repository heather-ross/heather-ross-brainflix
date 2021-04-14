import React, { Component } from 'react'
import './Upload.scss';
export default class Upload extends Component {
  
  submitHandler = (e) => {
      alert("Upload Successful! Click 'ok' to view your video.")
      e.preventDefault()
      this.props.history.push('/');
      e.target.reset()
    }
    render() {
      return (
      <section className="uploads">
        <h1 className="uploads__title">Upload Video</h1>
        <div className="uploads__form-wrap">
          <label>
            <h5 className="uploads__label">VIDEO THUMBNAIL</h5>
            <div className="uploads__thumbnail"></div>
          </label> 
          <form onSubmit={this.submitHandler} className="uploads__form" id="uploadsForm" method="post" name="uploadsForm">
            <label htmlFor="uploadsInput">
              <h5 className="uploads__label">TITLE YOUR VIDEO</h5>
                <input className="uploads__inputTitle" id="uploadsInputTitle" name="uploadsInputTitle" placeholder="Add a title to your video" required="" autoComplete="off" />
              </label>
              <label htmlFor="uploadsInput">
                <h5 className="uploads__label">ADD A VIDEO DESCRIPTION</h5>
                <textarea className="uploads__inputDesc" id="uploadsInputDesc" name="uploadsInputDesc" placeholder="Add a description of your video" required="" autoComplete="off"></textarea>
              </label> 
              <div className="uploads__border">         
                <button className="uploads__button" id="uploadsBtn" type="submit">PUBLISH</button>
                <button className="uploads__button uploads__button--delete" id="uploadsDeleteBtn" type="">CANCEL</button>
              </div>
          </form>
        </div> 
      </section>
      )
    }
}
