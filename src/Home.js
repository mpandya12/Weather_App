import React, { useEffect, useState } from 'react'
import "./App.css"
import  axios  from 'axios'

function Home() {
  const[data,setdata]=useState(
    {
      name:"Landon",
      temp:10,
      humidity:30,
      Wind:4

    }
  )
  useEffect(()=>{
      const apiurl="https://api.openweathermap.org/data/2.5/weather?q=london&appid=f27b269d54e4fa1e72993364a80fa8bd&units=metric"
      axios.get(apiurl).then((res) => {
        console.log(res);
        setdata({...data,name:res.data.name,temp:res.data.main.temp,humidity:res.data.main.humidity,speed:res.data.wind.speed})
      }).catch((err) => {
        
      });
  },[])
  return (
    <div className="container">
    <div className="header">
        <div className="search-box">
            <input type="text" placeholder="Enter your location" className="input-box"/>

            <button className="fa-solid fa-magnifying-glass" id="searchBtn"></button>
        </div>
   

  

    <div className="weather-body">
        <img src="/assets/cloud.png" alt="Weather Image" className="weather-img"/>

        <div className="weather-box">
            <p className="temperature">{data.temp} <sup>°C</sup></p>
            <p className="description">light rain</p>
        </div>

        <div className="weather-details">
            <div className="humidity">
                <i className="fa-sharp fa-solid fa-droplet"></i>
                <div className="text">
                    <span id="humidity">45%</span>
                    <p>Humidity</p>
                </div>
            </div>

            <div className="wind">
                <i className="fa-solid fa-wind"></i>
                <div className="text">
                    <span id="wind-speed">12Km/H</span>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>
</div>


</div> 
     
    
    
    
    
  )
}

export default Home