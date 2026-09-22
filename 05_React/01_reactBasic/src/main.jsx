import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'
function MyApp(){
  return (
    <>
    <h1>This is an Experiment</h1>
    </>
  )
}

const ReactElement = React.createElement(
     "a",
     {
        href : "https://google.com",
        target : "_blank"
    },
     "Click me Please"
  )

createRoot(document.getElementById('root')).render(
 
   ReactElement
 
    
  
)


