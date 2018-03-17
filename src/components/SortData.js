import React from 'react';

class SortData extends React.Component {

  state = {
    weatherData: [],
    sortedWeatherData: []
  }

  componentDidMount() {
    let weatherData = this.props.location.state.weatherData.map(city => {
      return { city: city.city.name, data: city.list, seaLevel: 0, minTemp: 0, maxTemp: 0, humidity: 0, windSpeed: 0 }
    })

    let sumData = weatherData.forEach(city => {
      city.data.forEach(local => {
        city.seaLevel += parseInt(local.main.sea_level, 10)
        city.minTemp += parseInt(local.main.temp_min, 10)
        city.maxTemp += parseInt(local.main.temp_max, 10)
        city.humidity += parseInt(local.main.humidity, 10)
        city.windSpeed += parseInt(local.wind.speed, 10)
      })
    })

    this.setState({
      weatherData: weatherData
    })
  }

  componentDidUpdate() {

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
