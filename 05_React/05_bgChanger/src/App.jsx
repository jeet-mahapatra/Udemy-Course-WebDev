import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


function App() {
  
  const [color, setColor] = useState("white")

  return (
    < >
    <div className='w-screen h-screen ' style={{backgroundColor : color}}>

      <div className='fixed flex flex-wrap justify-around items-center bottom-12 inset-x-0 px-2'>
        <button onClick={() => setColor("green")} className='border p-4 bg-green-500 cursor-pointer'>Green</button>
        <button onClick={() => setColor("black")} className='border p-4 bg-black text-white cursor-pointer'>Black</button>
        <button onClick={() => setColor("white")} className='border p-4 bg-white-500 cursor-pointer text-blue-400'>White</button>
        <button onClick={() => setColor("red")} className='border p-4 bg-red-500 cursor-pointer'>Red</button>
        <button onClick={() => setColor("pink")} className='border p-4 bg-pink-500 cursor-pointer'>Pink</button>
    </div>
    </div>
    
    </>
  )
}

export default App
