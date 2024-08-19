import { useEffect, useState } from 'react'
import { CurrencyConvertor } from './components/CurrencyConvertor'

function App() {


  // const handleConversion = () => {
  //   console.log("this will convert the currency")
  // }


  return (
    <>
      <div className='min-h-screen bg-gray-200 flex flex-col items-center justify-center'>
        <CurrencyConvertor/>
        
      </div>
     
    </>
  )
}

export default App
