import React from 'react'
import Left from './Left'
import Right from './Right'

const Checkout = () => {
  return (
    <div className='py-10 mb-8'>
            <div className="max-w-[880px] mx-auto">
                <div className="flex">
                    <Left />
                    <Right />
                </div>
            </div>
    </div>
  )
}

export default Checkout