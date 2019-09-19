import React, { Component } from 'react';
import Counter from './components/counter/Counter';
// added "{ Component }" above

// lets class know it's a react component, gives state, props
class App extends Component {

  render() {
    return (
      <div>
      <h1 className='colored'>Counter Example</h1>
      <Counter name= 'red' age='21' />
      <Counter name='green'/>
      <Counter name='purple'/>
      <Counter name='blue'/>
      <Counter name='yellow'/>
      </div>
    );
  }
}

export default App;
