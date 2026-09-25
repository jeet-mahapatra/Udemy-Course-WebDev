import React, { useEffect, useState } from 'react'

function UseEffect() {

  const [count , setCount] = useState(0)
  const [name , setName] = useState("Jeet")

  useEffect(()=>{
    setTimeout(() => {
      setCount(prev => prev+1)
    }, 3000);
  },[ name])

  setTimeout(() => {
      setName("Samrat")
    }, 5000);

  return (
    <div className='h-screen flex justify-center items-center'>
      <h1 className='text-4xl'>This is incresing {count} , {name}</h1>
    </div>
  )
}

export default UseEffect
