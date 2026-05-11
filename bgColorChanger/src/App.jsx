import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
     

<div
  className="h-screen w-full flex flex-col justify-end items-center p-6 duration-300"
  style={{ backgroundColor: color }}
>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
    
    <button
      onClick={() => setColor("red")}
      className="bg-white p-1 rounded-xl"
    >
      <div className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold">
        Red
      </div>
    </button>

    <button
      onClick={() => setColor("blue")}
      className="bg-white p-1 rounded-xl"
    >
      <div className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold">
        Blue
      </div>
    </button>

    <button
      onClick={() => setColor("green")}
      className="bg-white p-1 rounded-xl"
    >
      <div className="bg-green-500 text-white py-2 px-4 rounded-lg font-semibold">
        Green
      </div>
    </button>

    <button
      onClick={() => setColor("yellow")}
      className="bg-white p-1 rounded-xl"
    >
      <div className="bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold">
        Yellow
      </div>
    </button>

    <button
      onClick={() => setColor("purple")}
      className="bg-white p-1 rounded-xl"
    >
      <div className="bg-purple-500 text-white py-2 px-4 rounded-lg font-semibold">
        Purple
      </div>
    </button>

    <button
      onClick={() => setColor("pink")}
      className="bg-white p-1 rounded-xl"
    >
      <div className="bg-pink-500 text-white py-2 px-4 rounded-lg font-semibold">
        Pink
      </div>
    </button>

    <button
      onClick={() => setColor("orange")}
      className="bg-white p-1 rounded-xl"
    >
      <div className="bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold">
        Orange
      </div>
    </button>

    <button
      onClick={() => setColor("teal")}
      className="bg-white p-1 rounded-xl"
    >
      <div className="bg-teal-500 text-white py-2 px-4 rounded-lg font-semibold">
        Teal
      </div>
    </button>

  </div>
</div>
    </>
  )
}

export default App
