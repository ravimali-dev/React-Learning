import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
import React from 'react'

const createAnother = (
    <h1>helllo i am ravi</h1>
)
const newobj = React.createElement(
    "a",
    {},
    "this is the h1 tag!"
)
createRoot(document.getElementById('root')).render(
    
     createAnother
     
   
)
