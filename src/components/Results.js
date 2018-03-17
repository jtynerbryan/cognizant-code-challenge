import React from 'react';

class Results extends React.Component {

  state = this.props.location.state.cities

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
