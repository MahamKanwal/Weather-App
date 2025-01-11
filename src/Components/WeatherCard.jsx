import React from 'react'

const WeatherCard = () => {
  return (
   <>
    <div className="h-screen flex flex-col 
			items-center justify-center bg-green-400">
   {weatherData && (
				<div className="bg-white p-8 rounded shadow-md">
					<div className="mt-4">
						{/* Display location and country */}
						<h3 className="text-xl font-semibold mb-2">
							Weather in {weatherData.location.name},
							{weatherData.location.country}
						</h3>
						{/* Display current weather conditions */}
						<p>
							Condition: 
							{weatherData.current.condition.text}
						</p>
						{/* Display current temperature */}
						<p>
							Temperature: 
							{weatherData.current.temp_c}°C
						</p>
						{/* Display "feels like" temperature */}
						<p>
							Feels Like: 
							{weatherData.current.feelslike_c}°C
						</p>
						{/* Display wind information */}
						<p>
							Wind: {weatherData.current.wind_kph}
							KMH in {weatherData.current.wind_dir} Direction
						</p>
					</div>
				</div>
			)}
		</div>

   </>
  )
}

export default WeatherCard