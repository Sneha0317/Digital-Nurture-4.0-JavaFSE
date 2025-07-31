import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0); // starts at 0

  function increment() {
    setCount(count + 1);
    sayHello();
    staticMessage();
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello!");
  }

  function staticMessage() {
    alert("You clicked the Increase button.");
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handleClick(e) {
    e.preventDefault(); // synthetic event
    alert("I was clicked");
  }

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={() => sayWelcome("Welcome")}>Say welcome</button>
      <br />
      <button onClick={handleClick}>Click on me</button>
      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
