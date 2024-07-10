import React from 'react'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import SideVideo from '../../components/sideVideo/SideVideo';
import './watchScreen.scss'
import Comments from '../../components/comments/Comments.jsx';
const WatchScreen = () => {
  return (
    <div className="watch-video-container">
        <div className="left">
            <div className="watchScreen_video">
                <iframe 
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title= 'MY VIDEO'
                allowFullScreen
                width='100%'
                height='100%'
                >
                </iframe>
            </div>
            <VideoMetaData/>
            <Comments/>
            {/* <h1>Comments</h1> */}
        </div>
        <div className="right">
            {[...Array(10)].map(()=> (<SideVideo/>
            ))}
        </div>
    </div>
  )
}

export default WatchScreen;
