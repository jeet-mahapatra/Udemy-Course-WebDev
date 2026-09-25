import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


function App() {
  const [color, setColor] = useState("Red")

  

  return (
   <>
   <div className='h-screen w-screen flex flex-col justify-center items-center gap-4'>
    <h1 className='text-2xl'>My favourite color is {color} </h1>
   <button onClick={()=> setColor("Blue")} className='border p-2 rounded-xl cursor-pointer'>Blue</button>
   <button onClick={()=> setColor("Green")} className='border p-2 rounded-xl cursor-pointer'>Green</button>
   <button onClick={()=> setColor("Pink")} className='border p-2 rounded-xl cursor-pointer'>Pink</button>
   <button onClick={()=> setColor("Black")} className='border p-2 rounded-xl cursor-pointer'>Black</button>
   <button onClick={()=> setColor("Violet")} className='border p-2 rounded-xl cursor-pointer'>Violet</button>
   </div>
   </>
  )
}

export default App
