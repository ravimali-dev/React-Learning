
import React from 'react'
import { useState } from 'react'
import useCurrencyInfo from './hook/useCurrencyInfo'

const InputBox = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [result, setResult] = useState(0)

  let data = useCurrencyInfo(fromCurrency)

  function swap() {
    let temp = fromCurrency;
    setFromCurrency(toCurrency)
    setToCurrency(temp)

    let oldAmount = amount;
    setAmount(result);
    setResult(oldAmount)
  }

  function convert() {
    let values = amount * data[toCurrency]
    setResult(values)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-5'>

      <div className='w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 space-y-5'>

        <h1 className='text-3xl font-bold text-center text-slate-800'>
          Currency Converter
        </h1>

        {/* First Box */}
        <div className='bg-slate-100 rounded-2xl p-4 flex items-center gap-3'>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='flex-1 bg-transparent outline-none text-xl font-semibold text-slate-800'
          />

          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className='bg-slate-800 text-white border border-slate-700 rounded-2xl px-4 py-2 outline-none font-semibold shadow-md hover:bg-slate-700 transition-all cursor-pointer'
          >
            {Object.keys(data).map((c) => (
              <option value={c} key={c} className='bg-slate-800 text-white rounded-xl'>
                {c.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className='flex justify-center'>
          <button
            className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition-all'
            onClick={swap}
          >
            Swap
          </button>
        </div>

        {/* Second Box */}
        <div className='bg-slate-100 rounded-2xl p-4 flex items-center gap-3'>
          <input
            type="number"
            value={result}
            readOnly
            className='flex-1 bg-transparent outline-none text-xl font-semibold text-slate-800'
          />

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className='bg-slate-800 text-white border border-slate-700 rounded-2xl px-4 py-2 outline-none font-semibold shadow-md hover:bg-slate-700 transition-all cursor-pointer'
          >
            {Object.keys(data).map((c) => (
              <option value={c} key={c} className='bg-slate-800 text-white rounded-xl'>
                {c.toUpperCase()}
                </option>
            ))}
            
          </select>
        </div>

        {/* Convert Button */}
        <button
          onClick={convert}
          className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl text-lg font-semibold transition-all'
        >
          Convert Currency
        </button>

      </div>
    </div>
  )
}

export default InputBox;

