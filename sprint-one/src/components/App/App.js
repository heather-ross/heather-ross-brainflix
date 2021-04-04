import '../../styles/global.scss';
import Header from '../Header/Header';
import Comments from '../Comments/Comments';
import HeroVideo from '../HeroVideo/HeroVideo';
import VideoPost from '../VideoPost/VideoPost';
import SingleVideo from '../SingleVideo/SingleVideo';
import heroVideoData from '../../data/video-details.json';
import listVideosData from '../../data/videos.json';
import React from 'react';

class App extends React.Component {
  state = { 
    currentVideo: heroVideoData[0],
    nextVideos: listVideosData,
}
updateVideo = (videoId) => {
  this.setState({
    currentVideo: heroVideoData.find(video => video.id === videoId),
    nextVideos: listVideosData,
  })
}
  render() {
    return (
      <>
        <Header />
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
      </>
    );
  }
}
export default App;
