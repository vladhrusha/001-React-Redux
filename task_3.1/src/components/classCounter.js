import React from 'react';

class ClassCounter extends React.Component {
  render() {
    return (
      <div className='counter'>
        <h2>Class</h2>
        <h3 className='result'>0</h3>
        <h5 className='increase'>+</h5>
        <h5 className='decrease'>-</h5>
        <h4 className='reset'>Reset</h4>
      </div>
    );
  }
}

export default ClassCounter;
