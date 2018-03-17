import React from 'react';

class Loader extends React.Component {

  state = {
    apiKey: 'ce658e43d986d3db6fdafac97e5a006b',
    cities: [],
    ids: [],
    weatherData: []
  }

  componentDidMount() {
    this.setState({
      cities: this.props.location.state.cities
    })
  }

  componentDidUpdate() {
    if (this.state.ids.length === 0) {
      this.state.cities.forEach(city => {
        fetch('http://localhost:3000/cities?name=' + city)
        .then(res => res.json())
        .then(res =>
          this.setState({ ids: [...this.state.ids, res[0].id]})
        )
      })
    } else if (this.state.cities.length === this.state.ids.length && this.state.weatherData.length === 0) {
      this.state.ids.forEach(id => {
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=' + id + '&APPID=' + this.state.apiKey + '&units=imperial')
        .then(res => res.json())
        .then(res =>
          this.setState({ weatherData: [...this.state.weatherData, res]})
        )
      })
    } else if (this.state.weatherData.length === this.state.ids.length) {
      this.props.history.push({
        pathname: "/sort-weather-data",
        state: { weatherData: this.state.weatherData }
      })
    }
  }

  render() {
    return (
      <div style={{margin: 'auto', textAlign: 'center', width: '50%', marginTop: '20px'}}>
        <h1>Loading Weather Data...</h1>
      </div>
    )
  }
}

export default Loader
