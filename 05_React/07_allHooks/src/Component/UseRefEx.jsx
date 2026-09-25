import React, { useEffect, useRef, useState } from 'react'

function UseRefEx() {
    // const [value ,setValue] = useState(0)
    // const count = useRef(0)

    // useEffect(() => {
    //     count.current = count.current+1
        
    // } , [value])

    //Another example 

    const inputVal = useRef()

    const clicked = () => {
        console.log(inputVal.current.value);
        inputVal.current?.select()
        window.navigator.clipboard.writeText(inputVal.current.value)
        
    }

  return (
    // <div className='h-screen flex flex-col justify-center items-center'>
    //   <button onClick={() => setValue(prev => prev-1)} className='border p-3'>-1</button>
    //   <h1>value : {value} </h1>
    //   <button onClick={() => setValue(prev => prev+1)} className='border p-3'>+1</button>
    //   <h1 >Render : {count.current} </h1>
    // </div>

    <div className='h-screen flex flex-col justify-center items-center gap-5'>
        <input type="text" className='border' ref={inputVal}/>
        <button onClick={clicked} className=' border p-4'>Click</button>
    </div>
  )
}

export default UseRefEx
