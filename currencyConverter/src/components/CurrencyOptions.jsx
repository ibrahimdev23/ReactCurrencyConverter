import React from 'react'

export const CurrencyOptions = ({currencies, currency, setCurrency, title=""}) => {
    return (
    

    <div >
    
       
        <label className='block text-sm font-medium text-gray-800' htmlFor={title}>
            {title}
        </label>
        <div className='mt-1 relative'>
        {/* {currencies.map(item => console.log(item)) */}

            <select 
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className='w-full p-2 border border-gray-400 rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-indigo-700 '>
                {
                    currencies.map((currency) => {
                        console.log(currency[0])
                        return <option value={currency} key={currency}>
                        {currency}
                    </option>
                    })
                }
              
            </select>
        </div>
        
    </div>

  )
}
