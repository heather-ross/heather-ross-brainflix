import React from 'react'
import axios from 'axios';
import Comments from '../components/Comments/Comments';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import VideoPost from '../components/VideoPost/VideoPost';
import SingleVideo from '../components/SingleVideo/SingleVideo';
import heroVideoData from '../data/video-details.json';
// import listVideosData from '../data/videos.json';


class Home extends React.Component {
    state = { 
        currentVideo: heroVideoData[0],
        // nextVideos: listVideosData,
        nextVideos: [],
    }

    componentDidMount() {
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=013226f6-61a5-4220-9634-2e2e331c2789')
        .then( res => {
            this.setState({nextVideos: res.data})
        }) 
    }

    updateVideo = (videoId) => {
      this.setState({
        currentVideo: heroVideoData.find(video => video.id === videoId),
        // nextVideos: listVideosData,
      })
    }

render() {
    return (
        <div>
            <HeroVideo currentVideo={this.state.currentVideo}/>
        <div className="flex">
        <main>
          <VideoPost currentVideo={this.state.currentVideo}/> 
          <Comments currentVideo={this.state.currentVideo} />
        </main>
        <aside className="videoList">
          <h5 className="videoList__label">NEXT VIDEO</h5>
            {this.state.nextVideos.filter(singleVideo => singleVideo.id !== this.state.currentVideo.id)
            .map(singleVideo => 
              <SingleVideo 
              image={singleVideo.image} 
              title={singleVideo.title} 
              channel={singleVideo.channel} 
              key={singleVideo.id}
              id={singleVideo.id}
              updateVideo={this.updateVideo}/>
            )} 
        </aside> 
      </div>     
    </div>
    )
  }
}

export default Home
