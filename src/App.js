import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {

  const [posts, setPosts] = useState([]);
  React.useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=67.028061&lon=67.028061&exclude=&appid=868afe26aed87b569635801db9004f4a`)
      .then(res => {

        console.log(res.data.daily)
        //const newPost = res.data.daily;
        const newPost = res.data.daily;
        setPosts(newPost);

      });
  }, []);
  return (
    <div className="App">
      {
        (posts && posts.length > 0)
          ?
          (
            posts.map((item, index) => {
              return (
                <div key={index}>
                  <h1>Temp : {item.temp.day} Feels Like : {item.feels_like.day} Description : {item.weather[0].description} </h1>
                </div>
              );
            })
          )
          :
          (<h1> Data Not Found! </h1>)
      }
    </div>
  );
}

export default App;