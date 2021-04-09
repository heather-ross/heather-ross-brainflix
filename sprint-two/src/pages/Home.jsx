import React from 'react'
import axios from 'axios';
import Comments from '../components/Comments/Comments';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import VideoPost from '../components/VideoPost/VideoPost';
import SingleVideo from '../components/SingleVideo/SingleVideo';
// import heroVideoData from '../data/video-details.json';
// import listVideosData from '../data/videos.json';

class Home extends React.Component {
  
    state = { 
        currentVideoId: null,
        currentVideo: {},
        nextVideos: []
    }
    componentDidMount = () => {
      console.log(this.props);
      console.log('did mount')
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=013226f6-61a5-4220-9634-2e2e331c2789')
        .then( res1 => {
            axios.get(`https://project-2-api.herokuapp.com/videos/${res1.data[0].id}?api_key=013226f6-61a5-4220-9634-2e2e331c2789`)
            .then( res2 => { 
            this.setState({
              currentVideoId: res2.data.id,
              currentVideo: res2.data,
              nextVideos: res1.data
            })
          })
            .catch(err=>{
              console.error(err);
            })
          })
        }

    componentDidUpdate = () => {
      const id = this.props.match.params.id ? this.props.match.params.id : this.state.currentVideoId;
      if(id !== this.state.currentVideoId) {
      axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=013226f6-61a5-4220-9634-2e2e331c2789`)
      .then( res => { 
        console.log('axios inside did Update')

        this.setState({
          currentVideoId: res.data.id,
          currentVideo: res.data,
        })
      })
      }
    }
  
render() {
    return (
        <div>
            <HeroVideo currentVideo={this.state.currentVideo}/>
        <div className="flex">
        <main>
          <VideoPost currentVideo={this.state.currentVideo}/> 
          <Comments currentVideoComments={this.state.currentVideo.comments}/>
        </main>
        <aside className="videoList">
          <h5 className="videoList__label">NEXT VIDEO</h5>
              <SingleVideo 
                currentVideoId={this.state.currentVideoId}
                nextVideos={this.state.nextVideos}
                props={this.props}/>
        </aside> 
      </div>     
    </div>
    )
  }
}

export default Home
