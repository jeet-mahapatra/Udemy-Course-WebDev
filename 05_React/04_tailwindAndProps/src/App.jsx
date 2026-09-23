import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Card from './component/Card'


function App() {
 
 let myObj = {
  userName : {
    student1 : "Ramesh",
    student2 : "Hitesh"
  }
 }

  return (
   <>
   <h1 className='bg-blue-300 text-5xl p-4'>This is Tailwind css</h1>
   <br/>
   <Card student = {myObj.userName.student1}/>
   <br />
   <Card student = {myObj.userName.student2}/>
   </>
  )
}

export default App
