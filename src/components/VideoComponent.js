import React from 'react';

const VideoPlayer = (props) => {
  var link = props.link;
  const SRC= "https://www.youtube.com/embed/videoseries?list=" + link + "&rel=0&modestbranding=1";
  return (
    <div className="video-wrapper">
      <iframe
      title="videoplayer"
      src={SRC}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      
      frameBorder="0"
      allowfullscreen></iframe>
    </div>
  );
}
 

export default VideoPlayer;