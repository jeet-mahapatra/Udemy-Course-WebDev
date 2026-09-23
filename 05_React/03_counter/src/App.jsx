import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  let [counter ,setCounter] = useState(5)

  let [message ,setMessage] = useState("")

  


  const addValue = () =>{
    if(counter < 20){
      setMessage("")
    setCounter(counter+1)
    }
  else{
    setMessage("You have reached the upper limit , please decrese")
  }
  }

  const removeValue = () =>{
    if(counter > 0){
      setMessage("")
      setCounter(counter - 1)
    }
    else{
    setMessage("You have reached the Lower limit , please increse")
  }
  }

  return (
    <>
    <h1>This is the Counter Project</h1>
    <h3>Counter Value : {counter}</h3>
    <button onClick={addValue}>Add {counter}</button>
    <br/>
    <br/>
    <button onClick={removeValue}>Remove {counter}</button>

    <p>{counter}</p>
    <h1>{message}</h1>
    </>
  )
}

export default App
