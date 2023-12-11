import React from 'react'
import oneimg from '../assets/1.jpg'

const AboutusSection = () => {
  return (
    <div className="flex justify-center items-center mt-5 mb-10">
  <div className="max-w-lg p-6 bg-white ">
      <h5 className="mb-2 text-md font-bold tracking-tight text-green-700 dark:text-white">About Us</h5>

      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black-700 dark:text-white">Our Journey is Started With a Determination To Travel All Around This World</h5>

   
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quo accusantium eveniet! Eligendi, officia! Minima soluta maxime minus explicabo accusamus amet quaerat optio, saepe hic dolor vel iure velit enim?</p>   
  </div>

  <div className="max-w-2xl bg-white shadow dark:bg-gray-800 dark:border-gray-700 ms-5">
  <img className="object-cover w-full h-[350px] md:h-[350px] md:w-full " src={oneimg} alt=""/>
  </div>
</div>
  )
}

export default AboutusSection