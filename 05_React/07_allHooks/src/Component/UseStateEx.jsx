import React, { useState } from 'react'

function UseStateEx() {

    const [student , setStudent] = useState({
        name : "Jeet",
        age : 22,
        year : "2026"
    })

    const changeName = ()=>{
        setStudent((prev) =>{
            return{
                ...prev,
                name : "Ayan",
                age : 50
            }
        })
    }

  return (
    <>
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-4xl'>My name is {student.name}</h1>
        <h3 className='text-xl'>I am {student.age} years old in {student.year}</h3>
        <button onClick={changeName} className='border p-2 rounded-xl cursor-pointer'>Ayan</button>
    </div>
    </>
  )
}

export default UseStateEx
