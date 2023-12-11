import React from 'react'


const Card = ({card}) => {
    console.log(card)

  return (
    <div className='flex mb-2'>
        
{
    card.map((element)=>(
        <div className=" me-2 ms-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=''> 
        <img className="h-[370px] w-full rounded" src={element.desc} alt="product image" />
   
        <div className="px-5 pb-5">
            <a href="/">
                <h5 className="text-md text-center m-3 font-semibold tracking-tight text-gray-900 dark:text-white">{element.destination}</h5>
            </a>
           
            <div className="flex items-center justify-between">
                <span className="">{element.package}</span>

                <span className="font-bold">{element.amount}</span>
            </div>
        </div>
        </div>
    </div>
    ))
}



    </div>
  )
}

export default Card