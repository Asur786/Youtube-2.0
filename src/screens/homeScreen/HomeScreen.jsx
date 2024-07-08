import React, { useEffect } from "react";
import {Col, Container,Row } from "react-bootstrap"
import CategoriesBar from "../../components/categoriesBar/CategoriesBar"
import Video from "../../components/video/Video"
import InfiniteScroll from "react-infinite-scroll-component"; 
import SkeletonVideo from "../../components/skeleton/SkeletonVideo";
import "./homeScreen.scss"
import { getPopularVideo} from "../../redux/slice/videoSlice"
import { useDispatch, useSelector } from "react-redux"

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPopularVideo())
  }, [dispatch]);

  const { videos, loading, category } = useSelector((state) => state.video);

  const fetchdata = () => {
    console.log("hello");
    if(category === "All") {
      dispatch(getPopularVideo());
    } else{
      dispatch(getsearchVideo(category));
    }
  }

  const handleClick= (video)=>{
    dispatch(addHistoryVideo(video));
  }

  return (
    
    <div className="outer-container">
        <CategoriesBar/>

        <InfiniteScroll
        dataLength={videos.length}
        next={fetchdata}
        hasMore={true}
        // height={"89vw"}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
      >

        <div className="rows">
            {!loading ? videos.map((video)=>(
                <div className="col" key={
                  typeof video.id === "object" && video.id ? video.id.videoId : video.id
                  }>
                    <Video videos={video} onClick={(video)=>handleClick(video)} />
                </div>
            ))
            : [...Array(20)].map((id)=>(
                <div className="col" key={id}>
                  <SkeletonVideo/>
                </div>
            ))}
          
        </div>
        </InfiniteScroll>
      </div>
  )
}

export default HomeScreen
