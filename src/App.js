import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {

  const [posts, setPosts] = useState([]);
  // const longiTude =document.getElementById("longiTude").value
  // const latitTude =document.getElementById("latitTude").value
  const dateTime =new Date().toLocaleDateString()
  React.useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=67.028061&lon=67.028061&exclude=&appid=868afe26aed87b569635801db9004f4a')
      .then(res => {

        console.log(res.data)
        //const newPost = res.data.daily;
        const newPost = res.data.daily;
        setPosts(newPost);

      });
  }, []);
  return (
    <div className="App">
      <div>
      {/* <input type="text"
      placeholder='Enter a cityName'
      name='longitude'
      id='cityName'/>
      <input type="text"
      placeholder='Enter a longitude'
      name='longitude'
      id='longiTude'/>
      <br />
      <input type="text"
      placeholder='Enter a latitTude'
      name='latitTude'
      id='latitTude'/> */}
      </div>
      {
        (posts && posts.length > 0)
        ?
          (
            posts.map((item, index) => {
              return (
                <div key={index} className="box" id="result">
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                <div id="weatherIcon"></div>
                <div className="info">
                    <h2 className="location"> Karchi , Pakistan</h2>
                    <h2 className="date">  {dateTime}</h2>
                    <p className="temp">{item.temp.day}</p>
                    <p className="tempmin_max">{item.temp.max}</p>
                    <p className="tempmin_max">{item.temp.min}</p>
                    <h6 className="tempmin_max">Feels Like : {item.feels_like.day} </h6>
                    <h6 className="tempmin_max">Description : {item.weather[0].description} </h6>
                </div>
        
               
{/*         
                <div key={index}>
                  <h1>Temp :  Feels Like : {item.feels_like.day}  </h1>
                </div> */}
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