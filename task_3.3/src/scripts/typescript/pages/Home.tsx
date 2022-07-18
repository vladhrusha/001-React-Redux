import '../../../styles/Main.scss';
import React from 'react';
// import {ReactComponent as logo} from '../../../logo.svg';



const logo = require('../../../logo.svg') as string;
const Home = () => {
  console.log(logo);
  return (
    <div className='main'>
      <img src={logo} className='App-logo' alt='logo' />
    </div>
  );
};
export default Home;

