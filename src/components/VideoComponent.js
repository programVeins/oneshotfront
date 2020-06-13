import React from 'react';

const VideoPlayer = (props) => {
  var plink = props.plink;
  var vlink = props.vlink;
  var SRC = ''
  if (plink != null) {
    SRC= "https://www.youtube.com/embed/videoseries?list=" + plink + "&rel=0&modestbranding=1";
  }
  if (vlink != null) {
    SRC= "https://www.youtube.com/embed/" + vlink + "?rel=0&modestbranding=1";
  }
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