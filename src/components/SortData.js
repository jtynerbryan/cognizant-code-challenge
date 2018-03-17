import React from 'react';

class SortData extends React.Component {

  state = {
    weatherData: [],
    sortedBySeaLevel: [],
    highestMinTemp: { name: '', minTemp: 0 },
    lowestMaxTemp: { name: '', maxTemp: 0 },
    lowestHumidity: { name: '', humidity: 0 },
    highestWindSpeed: { name: '', windSpeed: 0 }
  }

  componentDidMount() {
    let weatherData = this.props.location.state.weatherData.map(city => {
      return { city: city.city.name, data: city.list, seaLevel: 0, minTemp: 0, maxTemp: 0, humidity: 0, windSpeed: 0 }
    })

    // sum data until last iteration, then divide by array length to get average data for 5 day forecast
    weatherData.forEach(city => {
      city.data.forEach((forecast, index ) => {
        if (index+1 === city.data.length) {
          city.seaLevel /= index+1
          city.minTemp /= index+1
          city.maxTemp /= index+1
          city.humidity /= index+1
          city.windSpeed /= index+1
        } else {
          city.seaLevel +=  parseInt(forecast.main.sea_level, 10)
          city.minTemp += parseInt(forecast.main.temp_min, 10)
          city.maxTemp += parseInt(forecast.main.temp_max, 10)
          city.humidity += parseInt(forecast.main.humidity, 10)
          city.windSpeed += parseInt(forecast.wind.speed, 10)
        }
      })
    })

    this.setState({
      weatherData: weatherData
    })
  }

  componentDidUpdate() {
    if (this.state.sortedBySeaLevel.length === 0) {
      let copy = this.state.weatherData.slice(0)
      this.setState({
        sortedBySeaLevel: this.sortBySeaLevelAscending(copy),
        highestMinTemp: this.sortByHighestMinTemp(copy),
        lowestMaxTemp: this.sortByLowestMaxTemp(copy),
        lowestHumidity: this.sortByLowestHumidity(copy),
        highestWindSpeed: this.sortByHighestWindSpeed(copy)
      })
    }
  }

  sortBySeaLevelAscending = (weatherData) => {
    let sorted = weatherData.sort((a, b) => {
      return a.seaLevel - b.seaLevel
    })
    return sorted
  }

  sortByHighestMinTemp = (weatherData) => {
    let sorted = weatherData.sort((a, b) => {
      return b.minTemp - a.minTemp
    })
    return {name: sorted[0].city, minTemp: sorted[0].minTemp}
  }

  sortByLowestMaxTemp = (weatherData) => {
    let sorted = weatherData.sort((a, b) => {
      return a.maxTemp - b.maxTemp
    })
    return {name: sorted[0].city, maxTemp: sorted[0].maxTemp}
  }

  sortByLowestHumidity = (weatherData) => {
    let sorted = weatherData.sort((a, b) => {
      return a.humidity - b.humidity
    })
    return {name: sorted[0].city, humidity: sorted[0].humidity}
  }

  sortByHighestWindSpeed = (weatherData) => {
    let sorted = weatherData.sort((a, b) => {
      return b.windSpeed - a.windSpeed
    })
    return {name: sorted[0].city, windSpeed: sorted[0].windSpeed}
  }

  render() {
    return (
      <div style={{margin: 'auto', textAlign: 'center', width: '50%', marginTop: '20px'}}>
        <h1>Sorting Weather Data...</h1>
      </div>
    )
  }
}

export default SortData
