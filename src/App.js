import React, { Component } from 'react';
// added "{ Component }" above

// lets class know it's a react component, gives state, props
class App extends Component {

  //this is how we define state
  state = { value: 0 }

  inc = () => {
    // asynchronous - run without having to wait , runs at the same time
    // this.setState({ value: this.state.value + 1 })
    //the value: is what we are wanting to update
    this.setState( (state) => {
      return {value: state.value + 1}
    })
    console.log(this.state.value)
  }
  dec = () => {
    // this.setState({ value: this.state.value - 1 })
            this.setState( (state) => {
              return {value: state.value - 1}
            })
  }


  render() {
    return (
      <div>
      <h1 className='colored'>Counter Example</h1>
      <p>
        {/* js code goes here */}
        { this.state.value }
      </p>
      <button onClick={this.inc}>+</button>
      <button onClick={this.dec}>-</button>
      </div>
    );
  }
}

export default App;
