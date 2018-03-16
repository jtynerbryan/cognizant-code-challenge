import React from 'react';
import Input from './Input'

class Form extends React.Component {

  state = {
    apiKey: 'ce658e43d986d3db6fdafac97e5a006b',
    inputLength: 0,
    selectedCities: [],
    cities: []
  }

  componentDidMount() {
    // fetch('http://localhost:3000/cities?name=Boston')
    // .then(res => res.json())
    // .then(res => console.log(res))


    // fetch('http://api.openweathermap.org/data/2.5/forecast?id=4317656&APPID=' + this.state.apiKey + '&units=imperial')
    // .then(res => res.json())
    // .then(res => console.log(res))
  }

  handleNumSelect = (e) => {
    console.log(e.target.value);
    e.preventDefault()
    if (parseInt(e.target.value, 10) < 4) {
      alert('Please enter a valid number no less than 4')
    }
    this.setState({
      inputLength: e.target.value
    })
  }

  render() {
    if (this.state.inputLength < 4) {
      return (
        <div style={{margin: 'auto', width: '50%', textAlign: 'center'}}>
          <h1>Select how many cities you would like to find weather for (minimum of 4)</h1>
          <form >
            <input onChange={this.handleNumSelect} type='text' style={{borderColor: 'black', borderRadius: '5px', marginRight: '5px', fontSize: '20px', width: '30px'}}/>
          </form>
        </div>
      )
    } else {
      let inputs = []
      for (let i = 0; i < this.state.inputLength; i++) {
        inputs.push(<div key={i}><Input/></div>)
      }
      return (
        <div style={{margin: 'auto', width: '50%', textAlign: 'center'}}>
          <h1>Enter cities to find weather for:</h1>
          <form>
            {inputs}
          </form>
        </div>
      )
    }
  }
}

export default Form
