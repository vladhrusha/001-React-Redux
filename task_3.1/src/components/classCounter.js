import { React, Component, useState } from 'react';

class ClassCounter extends Component {
  state = {
    result: 0,
  };

  onIncrease = () => {
    this.setState({ result: this.state.result + 1 });
  };
  onDecrease = () => {
    this.setState({ result: this.state.result - 1 });
  };
  onReset = () => {
    this.setState({ result: 0 });
  };

  render() {
    return (
      <div className='counter'>
        <h2>Class</h2>
        <h3 className='result'>{this.state.result}</h3>
        <h5 className='controlButton increaseButton' onClick={this.onIncrease}>
          +
        </h5>
        <h5 className='controlButton decreaseButton' onClick={this.onDecrease}>
          -
        </h5>
        <h4 className='controlButton resetButton' onClick={this.onReset}>
          Reset
        </h4>
      </div>
    );
  }
}

export default ClassCounter;
