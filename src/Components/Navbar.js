import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-green-700 flex items-center p-5 justify-between">
  <div className='text-white text-xl'>Go Travel</div>
  <div className='flex'>
    <div className='ps-2 pe-2 text-white text-base'>Home</div>
    <div className='ps-2 pe-2 text-gray-400 text-base hover:text-white transition duration-300'>About Us</div>
    <div className='ps-2 pe-2 text-gray-400 text-base hover:text-white transition duration-300'>Destination</div>
    <div className='ps-2 pe-2 text-gray-400 text-base hover:text-white transition duration-300'>Testimonials</div>
    <div className='ps-2 pe-2 text-gray-400 text-base hover:text-white transition duration-300'>Contact Us</div>
  </div>
  <div className='flex'>
    <button className='p-1 pe-4 ps-4 border text-base me-2 bg-white text-black rounded'>SignUp</button>
    <button className='p-1 pe-5 ps-5 border text-white text-base rounded hover:bg-white hover:text-black transition duration-300'>Login</button>
  </div>
</div>

  )
}

export default Navbar