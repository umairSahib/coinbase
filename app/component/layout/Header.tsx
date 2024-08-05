import React from 'react'

const Header = () => {
  return (
    <>
    <header className='pl-10 pr-10 pt-10'>
        <div className='flex justify-between'>
            <div><h2 className='text-[#AEBAE5] font-normal text-sm'>In the past 24 hours</h2>
            <h1 className='text-lg font-semibold'>Market is up <span className='text-[#3ACC8A]'>2.29%</span></h1></div>
        
            <div className='relative '>
  <div className="flex items-center">
    <input
      type="text"
      name="inputName"
      placeholder="Search all assets"
      className="pt-4 pl-10 pb-4 pr-4 w-96 h-12 border text-[#AEBAE5] border-[#ECEFF1] font-normal text-sm rounded-lg"
    />
    <button type="submit" className="absolute left-2">
      <i className="fa-solid fa-magnifying-glass text-lg text-[#AEBAE5]"></i>
    </button>
  </div>
</div>
        </div>
    </header>
    </>
  )
}

export default Header