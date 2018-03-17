import React from 'react';

class Results extends React.Component {

  state = this.props.location.state.cities

  render() {
    let sortedBySeaLevel = this.state.sortedBySeaLevel.map((city, index) => {
      return <div key={index}><h4>{city.city}</h4><h5>sea level: {city.seaLevel}</h5></div>
    })
    return (
      <div>
        <h1 style={{margin: 'auto', textAlign: 'center', width: '50%', marginTop: '20px'}}>Weather Results</h1>
        <div style={{width: '20%', marginLeft: '20px', display: 'inline-block'}}>
          <h4>Cites in order by Seal Level (asc):</h4>
          {sortedBySeaLevel}
        </div>
        <div style={{display: 'inline-block', marginLeft: '40px'}}>
          <h4>Highest Min Temp:</h4>
          <h4>{this.state.highestMinTemp.name} ({this.state.highestMinTemp.minTemp} degrees)</h4>
        </div>
        <div style={{display: 'inline-block', marginLeft: '40px'}}>
          <h4>Lowest Max Temp:</h4>
          <h4>{this.state.lowestMaxTemp.name} ({this.state.lowestMaxTemp.maxTemp} degrees)</h4>
        </div>
        <div style={{display: 'inline-block', marginLeft: '40px'}}>
          <h4>Lowest Humidity:</h4>
          <h4>{this.state.lowestHumidity.name} ({this.state.lowestHumidity.humidity}%)</h4>
        </div>
        <div style={{display: 'inline-block', marginLeft: '40px'}}>
          <h4>Highest Wind Speed:</h4>
          <h4>{this.state.highestWindSpeed.name} ({this.state.highestWindSpeed.windSpeed}mph)</h4>
        </div>
      </div>
    )
  }
}

export default Results
