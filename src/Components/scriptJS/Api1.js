import React,{useState,useEffect} from 'react'
import axios from "axios";
// "https://www.googleapis.com/youtube/v3/search"

const Api1 = (url1) => {
      const [video, setVideo] = useState([])

  useEffect(() => {
    const showVideo = async () => {
      const response = await axios.get(url1, {
        params: {
          part: 'snippet',
          type: 'video',
          maxResults: 20,
          key: "AIzaSyAVqhLo3BxIWGfbgUN_BqOhyOagGlIzNSE",

        }
      })
      setVideo(response.data.items)
    }
    showVideo()
    console.log(video)
  }, [])
    return video;
}

export default Api1;
