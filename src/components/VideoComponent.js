import React, { Component } from 'react';
import YouTube from 'react-youtube';
 
class VideoPlayer extends Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0
      },
    };
 
    return <YouTube className="vid" videoId="djwxbqxjxEg" opts={opts} onReady={this._onReady} />;
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default VideoPlayer;