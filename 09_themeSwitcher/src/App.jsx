import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ThemeBtn from './Component/Theme'
import Card from './Component/Card'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
   setTheme(theme === "light" ? "dark" : "light")
}


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

    </ThemeContext.Provider>
  )
}

export default App
