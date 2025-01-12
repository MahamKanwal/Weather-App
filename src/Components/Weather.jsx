// import React,{ useRef,useState} from 'react'
// import axios from 'axios'
// import WeatherCard from './WeatherCard';

// export const Weather = () => {
// const userCityRef = useRef(null);
// const [weather, setWeather] = useState([]);

// const getCityName = async (event) => {
// event.preventDefault();

// let cityName = userCityRef.current.value;

// if (!cityName.trim()) {
//     alert("Please enter a city name");
//     return; 
//   }

// let APIkey = "1b789cf85df8b83800c62a76a1411983";
// try{
// let response = await axios.get(
//   `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
//   );
// setWeather([response.data, ...weather]);
// }
// catch(e){
//   console.error("Error fetching weather data:", e);
//   alert("City not found. Please check the city name.");
// }
// };

//   return (
//   <>
      
//       <div className="h-screen flex flex-col 
// 			items-center justify-center bg-green-400">
// 			<div className="bg-white p-8 rounded shadow-md mb-4">
// 				<h2 className="text-2xl font-bold mb-4">
// 					Weather App
// 				</h2>
// <label htmlFor="userCity"></label>
// 				<input
// 					type="text"
// 					placeholder="Enter City Name"
//           ref={userCityRef}
//           id='userCity'
// 					className="border p-2 w-full mb-4"
// 					/>
// 				<button
// 					className="bg-green-400 text-white p-2 rounded"
// 					onClick={getCityName}>
// 					Get Weather
// 				</button>
//         </div>
//         {console.log(weather)}
// {weather.length ? <WeatherCard weather={weather} /> : "Data Not Found"}
// </div>

//    </>
//   )
// }
// export default Weather;

import React, { useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import WeatherCard from './WeatherCard';

export const Weather = () => {
  const userCityRef = useRef(null);
  const [weather, setWeather] = useState([]);

  const getCityName = async (event) => {
    event.preventDefault();
    const cityName = userCityRef.current.value;

    if (!cityName.trim()) {
      Swal.fire({
        title: "Oops!",
        text: "Please Enter A City Name.",
        icon: "warning",
      });
      return;
    }

    const APIkey = '1b789cf85df8b83800c62a76a1411983';

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
      );
      setWeather([response.data, ...weather]);
      Swal.fire({
        title: "Success!",
        text: `Weather data for ${response.data.name} loaded successfully!`,
        icon: "success",
      });

    } catch (e) {
      console.error('Error fetching weather data:', e);
      Swal.fire({
        title: "Error",
        text: "City not found. Please check the city name.",
        icon: "error",
      });
  
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-blue-400 p-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">Weather App</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mb-8">
        <input
          type="text"
          placeholder="Enter City Name"
          ref={userCityRef}
          className="border border-gray-300 p-2 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all duration-300"
          onClick={getCityName}
        >
          Get Weather
        </button>
      </div>

      
      <div className="flex flex-wrap justify-center gap-6">
        {weather.length ? (
          weather.map((cityWeather, index) => (
            <WeatherCard key={index} weather={[cityWeather]} />
          ))
        ) : (
          <p className="text-white">No Data Found</p>
        )}
      </div>
    </div>
  );
};

export default Weather;

