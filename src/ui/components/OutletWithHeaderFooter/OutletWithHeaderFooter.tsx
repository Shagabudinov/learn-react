import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const OutletWithHeaderFooter = ({ children }) => {
  return (
    <div className='flex flex-col items-center min-h-screen w-full'>
      <Header/>
      <div className='flex-1 w-[1024px] flex flex-wrap break-words'>
        { children }
      </div>
      <Footer/>
    </div>
  )
}

export default OutletWithHeaderFooter