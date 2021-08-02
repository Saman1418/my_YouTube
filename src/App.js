// import React, { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/scriptJS/Header';
import Sidebar from './Components/scriptJS/Sidebar';
import SearchPage from './Components/scriptJS/SearchPage';
import SearchVideo from './Components/scriptJS/SearchVideo';
import Detail from './Components/scriptJS/Detail';
import RecomendedVideo from './Components/scriptJS/RecomendedVideo';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// function App() {
//   const [videos, setVideos] = useState([])

//   useEffect(() => {
//     const showVideo = async () => {
//       const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
//         params: {
//           part: 'snippet',
//           type: 'video',
//           maxResults: 20,
//           key: "AIzaSyAVqhLo3BxIWGfbgUN_BqOhyOagGlIzNSE",

//         }
//       })
//       setVideos(response.data.items)
//     }
//     showVideo()
//     console.log(videos)
//   }, [])


class App extends React.Component {
  state = { SearchVideos: [], Selectvideo: null }


  onTermSubmit = async (inputSearch) => {
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 20,
        key: "AIzaSyAVqhLo3BxIWGfbgUN_BqOhyOagGlIzNSE",
        q: inputSearch
      }
    })
    this.setState({ SearchVideos: response.data.items })
    console.log(this.SearchVideos)

  }


  onVideoSelect = (searchVideos) => {
    this.setState({ Selectvideo: searchVideos })
  }
  render() {
    return (
      <div className="App" >
        <Router>
          <Header onSubmits={this.onTermSubmit} />
          <Switch>

            <Route path="/project">
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>

            </Route>

            <Route path="/searchVideo">
              <div className="app__page">
                <Sidebar />
                <div className="app__page1">
                  <Detail Selectvideo={this.state.Selectvideo} />
                  <SearchVideo onVideoSelect={this.onVideoSelect} SearchVideos={this.state.SearchVideos} />
                  {/* SearchVideos={SearchVideos} */}
                  {/* onVideoSelect={onVideoSelect} */}
                </div>
                {/* <Detail Selectvideo={this.state.Selectvideo}/> */}
                {/* <SearchVideo onVideoSelect={this.onVideoSelect} SearchVideos={this.state.SearchVideos} /> */}
                {/* SearchVideos={SearchVideos} */}
                {/* onVideoSelect={onVideoSelect} */}
              </div>

            </Route>

            <Route path="/">
              <div className="app__page">
                <Sidebar />
                {/* <Detail Selectvideo={this.state.Selectvideo}/> */}
                <RecomendedVideo
                  // onVideoSelect={this.onVideoSelect}
                  url1="https://www.googleapis.com/youtube/v3/search"
                />
              </div>
            </Route>

          </Switch>
        </Router>


      </div>
    );
  }


}

export default App;
