import React,{ useRef,useState} from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard';

export const Weather = () => {
const userCityRef = useRef(null);
const [weather, setWeather] = useState([]);

const getCityName = async (event) => {
event.preventDefault();

let cityName = userCityRef.current.value;
let APIkey = "1b789cf85df8b83800c62a76a1411983";
try{
let response = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q${cityName}&appid=${APIkey}&units=metric`
  );
setWeather([response.data, ...weather]);
}
catch(e){
  console.log(e);
}
};

  return (
  <>
      
      <div className="h-screen flex flex-col 
			items-center justify-center bg-green-400">
			<div className="bg-white p-8 rounded shadow-md mb-4">
				<h2 className="text-2xl font-bold mb-4">
					Weather App
				</h2>
<label htmlFor="userCity"></label>
				<input
					type="text"
					placeholder="Enter City Name"
          ref={userCityRef}
          id='userCity'
					className="border p-2 w-full mb-4"
					/>
				<button
					className="bg-green-400 text-white p-2 rounded"
					onClick={getCityName}>
					Get Weather
				</button>
        </div>
        {console.log(weather)}
{weather.length ? <WeatherCard weather={weather}/> : "Data Not Found"}
</div>

   </>
  )
}
