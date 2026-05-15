import { useEffect, useRef, useState, useCallback } from 'react'

export default function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    // tera saara password wala code yahan
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) {
      str += '0123456789'
    }

    if (charAllowed) {
      str += '!@#$%^&*-_+=[]{}~`'
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str[randomIndex]
    }

    setPassword(pass)
  
}, [length, numberAllowed, charAllowed])

  
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  function copyPassword() {
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Password Generator
        </h1>

        <div className="flex overflow-hidden rounded-2xl bg-white/10 border border-white/10 mb-6">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Generated password"
            className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-400"
          />

          <button
            onClick={copyPassword}
            className="bg-blue-600 hover:bg-blue-700 transition-all px-5 text-white font-medium"
          >
            Copy
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-gray-300 font-medium">
                Password Length
              </label>

              <span className="text-blue-400 font-semibold">
                {length}
              </span>
            </div>

            <input
              type="range"
              min="8"
              max="100"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 cursor-pointer hover:bg-white/10 transition-all">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="w-4 h-4"
              />

              <span className="text-white">Include Numbers</span>
            </label>

            <label className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 cursor-pointer hover:bg-white/10 transition-all">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="w-4 h-4"
              />

              <span className="text-white">Special Characters</span>
            </label>
          </div>

          <button
            onClick={passwordGenerator}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] transition-all text-white font-semibold py-4 rounded-2xl shadow-lg"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  )
}