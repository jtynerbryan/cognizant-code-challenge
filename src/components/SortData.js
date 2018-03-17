import React from 'react';

class SortData extends React.Component {

  state = {
    weatherData: [],
    sortedBySeaLevel: []
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
      let sortedBySeaLevel = this.sortBySeaLevelAscending(copy)
      this.setState({
        sortedBySeaLevel: sortedBySeaLevel
      })
    }
  }

  sortBySeaLevelAscending = (weatherData) => {
    let sorted = weatherData.sort((a, b) => {
      return a.seaLevel - b.seaLevel
    })
    return sorted
  }



  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Sorting Weather Data...</h1>
      </div>
    )
  }
}

export default SortData
