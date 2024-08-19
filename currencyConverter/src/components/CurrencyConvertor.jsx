import React, { useState } from 'react'
import { currencies, apiKey } from '../currencies'
import { CurrencyOptions } from './CurrencyOptions'

export const CurrencyConvertor = () => {


//GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/BASE/TARGET

//GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/BASE/TARGET/AMOUNT

//const [currencies, setCurrencies] = useState([currenciesList])
const [amount, setAmount] = useState(1)


const [baseCurrency, setBaseCurrency] = useState("")
const [targetCurrency, setTargetCurrency] = useState("")
const [result, setResult] = useState("")

//currenciesList.map(item => console.log(item))
//console.log(currencies[0])
let toCurrency = baseCurrency.split(',')
let fromCurrency = targetCurrency.split(',')
console.log(toCurrency[0])
console.log(targetCurrency)
console.log(amount)

const currencyConvertor = async (e) => {
    e.preventDefault()

    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${toCurrency[0]}/${fromCurrency[0]}/${amount}`)
    const data = await res.json()
    const conversion = `${data["conversion_result"]} `
    setResult(conversion)
   // console.log(data["conversion_result"])
    return conversion

}


const swapCurrency = () => {
    setTargetCurrency(baseCurrency)
    setBaseCurrency(targetCurrency)
}
    return (
        <div>
             <h2 className='mb-2 text-4xl font-bold text-sky-900 '> 
            Currency Convertor
        </h2>
        
    <div className='max-w-xl mx-auto my-10 p-5 bg-slate-50  shadow-md'>
       
{/* DROPDOWN MENUE OPTIONS */}
        <div className='grid grid-col-1 sm:grid-cols-3 gap-4 items-end '>
            {/* <select id='fromCurrency' name='fromCurrency' title='Convert'></select>
            <button type='button' id='switchCurrency'>Switch</button>
            <select id='toCurrency' name='toCurrency' title='Convert To'></select> */}
          <CurrencyOptions 
          title="From"
          currency={baseCurrency}
          setCurrency={setBaseCurrency}
          currencies={currencies}

          ></CurrencyOptions>

            <div className='flex justify-center -mb-5 sm:mb-0'>
                <button 
                onClick={swapCurrency}
                className='p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-cyan-900'>
                <p className='text-xl text-gray-700' > 🔁</p>
                </button>
            </div>


          <CurrencyOptions
          currencies={currencies}
          title="To"
            currency={targetCurrency}
            setCurrency={setTargetCurrency}
            >
          </CurrencyOptions>
          
          
          </div>


          <div>


            <label className='block text-sm font-medium' htmlFor='amount'>Amount:</label>
            <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
             className='w-full p-2 border border-gray-200 rounded-md shadow-sm '
             type='number' id='inputValue' min='1' name='userInput' placeholder='1'>
            </input> 

            <div className='flex justify-end mt-6'>
                <button 
                onClick={currencyConvertor}
                className='px-5 py-2 bg-gray-900 text-white hover:bg-cyan-900'>Convert</button>
            </div>
            <div className='mt-4 text-2xl font-medium text-center text-cyan-900'>Result: {result}{fromCurrency[0]} </div>
          </div>
              

        {/* <form>
          <input type='number' id='inputValue' min='1' name='userInput' placeholder='20'>
          </input>
          <div className='selecter'>
            <select id='fromCurrency' name='fromCurrency' title='Convert'></select>
            <button type='button' id='switchCurrency'>Switch</button>
            <select id='toCurrency' name='toCurrency' title='Convert To'></select>
          </div>
        <p id='stutus'></p>
        <button onClick={handleConversion} type='button' id='btn'>Convert</button>
       <p id='result'></p>
        </form> */}
    </div>
    </div>
  )
}
