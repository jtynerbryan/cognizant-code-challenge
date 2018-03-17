export function sortByHighestMinTemp(weatherData) {
  let sorted = weatherData.sort((a, b) => {
    return b.minTemp - a.minTemp
  })
  return {name: sorted[0].city, minTemp: sorted[0].minTemp}
}

export function sortByLowestMaxTemp(weatherData) {
  let sorted = weatherData.sort((a, b) => {
    return a.maxTemp - b.maxTemp
  })
  return {name: sorted[0].city, maxTemp: sorted[0].maxTemp}
}

export function sortByLowestHumidity(weatherData) {
  let sorted = weatherData.sort((a, b) => {
    return a.humidity - b.humidity
  })
  return {name: sorted[0].city, humidity: sorted[0].humidity}
}

export function sortByHighestWindSpeed(weatherData) {
  let sorted = weatherData.sort((a, b) => {
    return b.windSpeed - a.windSpeed
  })
  return {name: sorted[0].city, windSpeed: sorted[0].windSpeed}
}

export function sortBySeaLevelAscending (weatherData) {
  let sorted = weatherData.sort((a, b) => {
    return a.seaLevel - b.seaLevel
  })
  return sorted
}
