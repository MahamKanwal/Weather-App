import React from 'react';
import '../App.css'
const WeatherCard = ({ weather }) => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-green-400">
        {weather.map((weather, index) => (
          <div key={index} className="bg-white p-8 rounded shadow-md">
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">
                Weather in {weather?.name}, {weather?.sys?.country}
              </h3>
              <p>Condition: {weather?.weather[0]?.description}</p>
              <p>Temperature: {weather?.main?.temp}°C</p>
              <p>Feels Like: {weather?.main?.feels_like}°C</p>
              <p>
                Wind: {weather?.wind?.speed} KMH in {weather?.wind?.deg}° Direction
              </p>
              <img
            src={`http://openweathermap.org/img/w/${weather?.weather?.[0].icon}.png`}
            alt=""

          />
            </div>
          </div>
        ))}
      </div>
{/* 
      {weatherData && (
				<div className="bg-white p-8 rounded shadow-md">
					<div className="mt-4">
						
						<h3 className="text-xl font-semibold mb-2">
							Weather in {weatherData.location.name},
							{weatherData.location.country}
						</h3>
						<p>
							Condition: 
							{weatherData.current.condition.text}
						</p>
						<p>
							Temperature: 
							{weatherData.current.temp_c}°C
						</p>
						<p>
							Feels Like: 
							{weatherData.current.feelslike_c}°C
						</p>
						<p>
							Wind: {weatherData.current.wind_kph}
							KMH in {weatherData.current.wind_dir} Direction
						</p>
					</div>
				</div>
			)}
		</div> */}



    </>
  );
};

export default WeatherCard;
