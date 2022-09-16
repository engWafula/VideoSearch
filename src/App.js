import React from "react";
import youTube from "./apis/youTube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/videoDetail";

class App extends React.Component {

  state = { videos: [], selectedVideo: null };

  onSearchSubmit =async (term)=>{
  const response = await youTube.get("/search",{
    params:{q:term},
   })
    this.setState({
      videos:response.data.items,
      selectedVideo:response.data.items[0]
    })
  }

  onVideoSelect = (video) => {
    console.log("this is the video", video)
    this.setState({ selectedVideo: video });
  }


  componentDidMount(){
  this.onSearchSubmit("football")
  }


  render(){
    console.log(this.state.videos)

  return (
    <div className="ui container" style={{marginTop:"10px"}}>
    <SearchBar onSubmit={this.onSearchSubmit}/>
    <div className="ui grid">
      <div className="ui row">
        <div className="eleven wide column">
    <VideoDetail video={this.state.selectedVideo}/>
    </div>
    <div className="five wide column">
    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
    </div>
    </div>
    </div>
    </div>
  );
}
}
export default App;
