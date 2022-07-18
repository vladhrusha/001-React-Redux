import '../../../styles/Main.scss';
import React from 'react';
// import {ReactComponent as logo} from '../../../logo.svg';
var logo = require('../../../logo.svg');
var Home = function () {
    console.log(logo);
    return (React.createElement("div", { className: 'main' },
        React.createElement("img", { src: logo, className: 'App-logo', alt: 'logo' })));
};
export default Home;
