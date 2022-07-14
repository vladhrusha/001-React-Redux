import { React, Component, useState } from 'react';

class ClassCounter extends Component {
  state = {
    result: 0,
  };

  increase = () => {
    this.setState({ result: this.state.result + 1 });
  };
  decrease = () => {
    this.setState({ result: this.state.result - 1 });
  };
  reset = () => {
    this.setState({ result: 0 });
  };

  render() {
    return (
      <div className='counter'>
        <h2>Class</h2>
        <h3 className='result'>{this.state.result}</h3>
        <h5 className='controlButton increaseButton' onClick={this.increase}>
          +
        </h5>
        <h5 className='controlButton decreaseButton' onClick={this.decrease}>
          -
        </h5>
        <h4 className='controlButton resetButton' onClick={this.reset}>
          Reset
        </h4>
      </div>
    );
  }
}

export default ClassCounter;
