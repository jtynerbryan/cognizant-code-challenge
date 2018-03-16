import React from 'react';

class Form extends React.Component {

  state = {
    apiKey: 'ce658e43d986d3db6fdafac97e5a006b',
    citySearchVal: '',
    cities: []
  }

  componentDidUpdate() {
    if (this.state.cities.length >= 4) {
        this.props.history.push({
          pathname: "/loader",
          state: { cities: this.state.cities }
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      citySearchVal: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let cities = this.state.citySearchVal.split(', ')
    if (cities.length < 4) {
      alert('Please enter at least 4 cities in the correct format')
      this.setState({
        citySearchVal: ''
      })
    } else {
      cities = cities.map(city => {
        return city.charAt(0).toUpperCase() + city.slice(1)
      })
      this.setState({
        cities: cities
      })
    }
  }

  render() {
    return (
      <div style={{width: '50%', textAlign: 'center', margin: 'auto', marginTop: '10px'}}>
        <h2>Please enter at least 4 cities to find weather data for</h2>
        <h3>Seperate each city by comma (ex. 'Boston, New York, London, Berlin')</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.citySearchVal} type='text' style={{height: '20px', width: '300px', borderColor: 'black', borderRadius: '5px', fontSize: '15px', marginBottom: '10px'}}/>
          <input type='submit' style={{borderColor: 'black', borderRadius: '5px', height: '25px'}}/>
        </form>
      </div>
    )
  }
}



export default Form
