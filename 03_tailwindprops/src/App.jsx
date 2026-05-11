import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Card username="Ravi" />
      <Card username="Ritik" />
       <Card username="Katen" />
    </>
  )
}

export default App
