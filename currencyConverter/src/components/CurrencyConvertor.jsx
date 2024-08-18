import React, { useState } from 'react'
import { currencies } from '../currencies'
import { CurrencyOptions } from './CurrencyOptions'

export const CurrencyConvertor = () => {


//GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/BASE/TARGET

//GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/BASE/TARGET/AMOUNT

//const [currencies, setCurrencies] = useState([currenciesList])
const [amount, setAmount] = useState(1)


const [baseCurrency, setBaseCurrency] = useState(["USD"])
const [targetCurrency, setTargetCurrency] = useState("EUR")

//currenciesList.map(item => console.log(item))
//console.log(currencies[0])
const currencyConvertor = () => {

}

    return (
        <div>
             <h2 className='mb-2 text-4xl font-bold text-sky-900 '> 
            Currency Convertor
        </h2>
        
    <div className='max-w-xl mx-auto my-10 p-5 bg-slate-50  shadow-md'>
       
{/* DROPDOWN MENUE OPTIONS */}
        <div className='dropdown '>
            {/* <select id='fromCurrency' name='fromCurrency' title='Convert'></select>
            <button type='button' id='switchCurrency'>Switch</button>
            <select id='toCurrency' name='toCurrency' title='Convert To'></select> */}
          <CurrencyOptions 
          title="From"
          currency={baseCurrency}
          setCurrency={setBaseCurrency}
          currencies={currencies}

          ></CurrencyOptions>
          <CurrencyOptions
          currencies={currencies}
          title="To">
            currency={targetCurrency}
            setCurrency={setTargetCurrency}
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
                <button className='px-5 py-2 bg-gray-900 text-white hover:bg-cyan-900'>Convert</button>
            </div>
            <div className='mt-4 text-2xl font-medium text-center text-cyan-900'>Result: </div>
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
