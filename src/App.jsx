import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick(){
    console.log("ds");
    alert("Button Clicked");
  }

  const handleClick2 = () => {
    alert("Button 2 clicked");
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React core concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Counter></Counter>

      <Team></Team>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => addToFive(4)}>Four</button>
    </>
  )
}

export default App
