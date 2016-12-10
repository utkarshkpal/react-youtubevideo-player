import React from 'react';

const VideoDetail = ({video}) => {

  //own embed url
  if(!video)
  {
    return <div>Start Searching!! </div>
  }

  const videoId=video.id.videoId;

  const url = "https://youtube.com/embed/"+videoId;

  return(

    <div className="video-detail col-md-8">
     <div className = "embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div><b>{video.snippet.title}</b></div>
        <div>{video.snippet.description}</div>
       </div>
      </div>

  );
};

export default VideoDetail;
