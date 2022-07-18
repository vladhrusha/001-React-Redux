// import '../styles/Main.scss';
import React from 'react';
var TodoList = function () {
    return (React.createElement("div", { className: 'main' },
        React.createElement("ul", null,
            React.createElement("li", null, "Eng 101 tutorial"),
            React.createElement("li", null, "Econ 210 lecture"),
            React.createElement("li", null, "meet with Biology group"),
            React.createElement("li", null, "lunch with Sam"),
            React.createElement("li", null, "Biology 120 lecture"),
            React.createElement("li", null, "work"))));
};
export default TodoList;
