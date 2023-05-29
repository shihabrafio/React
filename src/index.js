import React from "react";
import ReactDOM from "react-dom/client";

const root = document.querySelector("#root");

// const element = React.createElement('h1',null,'Hello World!');

// const element = <h1>Hello World!</h1>
// console.log(element)

//Part 1
function greet(user) {
    if (user) {
      return `Hello ${user}`;
    }
    return "Hello stranger";
  }
  const element2 = <h1>{greet("Rafio")}</h1>;
  // ReactDOM.createRoot(root).render(element2);

//Part 2

function greetings(user) {
  if (user) {
    return <b>Hello {user}</b>;
  }
  return <b>Hello stranger</b>;
}
const element3 = greetings("Zuheb");
console.log(element3);
// ReactDOM.createRoot(root).render(element3);

// Part 3
const index = 0;
const element4 = (
  <h1 className="heading" tabIndex={index}>
    <span>Hello World!</span>
    <img src="" alt=""></img>
  </h1>
);

console.log(element4);
// ReactDOM.createRoot(root).render(element4);

//Part 4
const index1 = 0;
setInterval(() => {
  const element5 = (
    <h1 className="heading" tabIndex={index1}>
      <span className="text">Hello {new Date().toLocaleTimeString()}</span>
      <img src="" alt=""></img>
    </h1>
  );
  ReactDOM.createRoot(root).render(element5)
}, 1000);
