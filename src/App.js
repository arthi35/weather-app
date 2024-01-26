import React, { useState } from 'react'
import Axios from'axios';
import './App.css';
const KEY='0ac787b208669bea7ee5f2791ed13b9f'
// const city='London'
const App = () => {

const[city,setCity]=useState("");
const[data,setData]=useState();

  const fetchData=async()=>{
    try{
      const response=await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
      setData(response.data);
    }
    catch(err){
      alert('API In Call')
    }
  }
  return (
    <div className='App'>
    <h1>Weather App</h1>
    <div className='input-container'>
      <input 
      type='text'
      className='input'
      value={city}
      onChange={e=>setCity(e.target.value)}
      placeholder='Enter City Name'
      
      />
      <button className='button' onClick={fetchData}>Fetch</button>

    </div>
    <div  >
      {data && (
        <div className='container'>
         
          <h1 class="heading">{data.name},{data.sys.country}</h1>
          <img src='https://jknewstoday.com/wp-content/uploads/2021/09/weather.png'/>
<div className='weathher-info'>
<div className='temp'>{Math.round(data.main.temp)}°C</div>

<div className='coordinates'>
  <div>Lat-{data.coord.lat}</div>
  
  <div>Lon-{data.coord.lon}</div>
</div>
</div>

        </div>
      )}
    </div>
    </div>
  )
}

export default App
