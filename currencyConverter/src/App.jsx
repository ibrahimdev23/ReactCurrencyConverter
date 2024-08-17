import { useEffect, useState } from 'react'


function App() {


  const handleConversion = () => {
    console.log("this will convert the currency")
  }


  return (
    <>
      <div>
        <h1>Currency Converter</h1>
        <form>
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
        </form>
      </div>
     
    </>
  )
}

export default App
