import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-teal-400 to-green-400">
      {weather.map((weather, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mb-6 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Weather in {weather?.name}, {weather?.sys?.country}
          </h3>
          <div className="flex items-center mb-4">
            <img
              src={`http://openweathermap.org/img/w/${weather?.weather?.[0].icon}.png`}
              alt="weather icon"
              className="w-16 h-16"
            />
            <p className="text-lg text-gray-600 ml-4 capitalize">
              {weather?.weather?.[0]?.description}
            </p>
          </div>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Temperature:</span> {weather?.main?.temp}°C
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Feels Like:</span> {weather?.main?.feels_like}°C
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Wind:</span> {weather?.wind?.speed} KMH in {weather?.wind?.deg}°
            Direction
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;
