import logo from './logo.svg';
import './App.css';
import CounterButton from './components/Counter/Counter'
import { Component } from 'react';
import './components/Counter/Counter.css'

function App() {
  return (
    <div className="App">
      <h2><b>COUNTER APP</b></h2>
      <CounterButton></CounterButton>
    </div>
  );
}




export default App;
