import React from 'react';

class Results extends React.Component {

  state = {
    cities: [],
    ids: []
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
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Results</h1>
      </div>
    )
  }
}

export default Results
