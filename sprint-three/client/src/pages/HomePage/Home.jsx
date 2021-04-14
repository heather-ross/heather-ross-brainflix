import React from 'react'
import axios from 'axios';
import CommentForm from '../../components/CommentForm/CommentForm';
import Comments from '../../components/Comments/Comments';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import VideoList from '../../components/VideoList/VideoList';

// const expressUrl = 'http://localhost:8080';

class Home extends React.Component {
    state = { 
        currentVideoId: null,
        currentVideo: {},
        nextVideos: [],
    }

    componentDidMount = () => {
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=013226f6-61a5-4220-9634-2e2e331c2789')
        // axios.get(expressUrl)
        .then( res1 => {
          axios.get(`https://project-2-api.herokuapp.com/videos/${res1.data[0].id}?api_key=013226f6-61a5-4220-9634-2e2e331c2789`)
          // axios.get(`${expressUrl}/videos/${res1.data[0].id}`)
          .then( res2 => { 
            this.setState({
              currentVideoId: res2.data.id,
              currentVideo: res2.data,
              nextVideos: res1.data,
            })
          })
            .catch(err=>{
              console.error(err);
            })
          })
    }

    componentDidUpdate = () => {
      const id = this.props.match.params.id ? this.props.match.params.id : this.state.nextVideos[0].id;
      if(id !== this.state.currentVideoId) {
        axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=013226f6-61a5-4220-9634-2e2e331c2789`)
        // axios.get(`${expressUrl}/${id}`)
        .then( res => { 
          this.setState({
            currentVideoId: res.data.id,
            currentVideo: res.data,
          })
          window.scrollTo(0, 0)
        })
        .catch(err=>{
          console.error(err);
        })
      }
    }
  
      handleSubmit = (e) => {
        e.preventDefault();
        let addComment = {name: "Heather Ross ", comment: e.target.commentInput.value};
        axios.post(`https://project-2-api.herokuapp.com/videos/${this.state.currentVideoId}/comments?api_key=013226f6-61a5-4220-9634-2e2e331c2789`,addComment)
        // axios.post(`${expressUrl}/videos/${this.state.currentVideoId}/comments`,addComment)
            .then(res => {
              console.log(res)
              this.setState({
                currentVideoId: res.data
              })
            })  
            .catch(err=>{
              console.error(err);
            }) 
            e.target.reset()
          }
    
    render() {
        return (
          <>
            <HeroVideo currentVideo={this.state.currentVideo}/>
          <div className="flex">
            <main>
              <VideoDetails currentVideo={this.state.currentVideo}/>
              <section className="comments"> 
                <CommentForm 
                  currentVideo={this.state.currentVideo.comments} 
                  handleSubmit={this.handleSubmit}/>
                <Comments 
                  currentVideo={this.state.currentVideo.comments}/>
              </section>  
            </main>
            <aside className="videoList">
              <h5 className="videoList__label">NEXT VIDEO</h5>
                  <VideoList 
                    currentVideoId={this.state.currentVideoId}
                    nextVideos={this.state.nextVideos}/>
            </aside> 
          </div>     
          </>
        )
      }
}
export default Home
