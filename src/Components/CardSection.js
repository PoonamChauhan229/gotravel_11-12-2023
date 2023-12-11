import React from "react";
import Card from "./Card";
import desc1 from '../assets/des-1.jpg'
import desc2 from '../assets/des-2.jpg'
import desc3 from '../assets/des-3.jpg'
import desc4 from '../assets/des-4.jpg'

const CardSection = () => {

  const cardDetails=[
    {
      desc:desc1,
      destination:"Get Into Wild In Indonesia",
      package:"3 Days 4 Nights",
      amount:"Rs:19,999"
    },
    {
      desc:desc2,
      destination:"Get Into Wild In Thailand",
      package:"3 Days 4 Nights",
      amount:"Rs:19,999"
    },
    {
      desc:desc3,
      destination:"Get Into Wild In India",
      package:"3 Days 4 Nights",
      amount:"Rs:19,999"
    },
    {
      desc:desc4,
      destination:"Get Into Wild In Maldives",
      package:"3 Days 4 Nights",
      amount:"Rs:19,999"
    },
  ]
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mb-5 max-w-[600px]">
          <p className="block text-center p-6 bg-white">
            <p className="mb-2 text-md tracking-tight text-green-700">
              Destination
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-3xl text-center">
              Explore The Breath-Taking Adventures With Us
            </p>
          </p>
        </div>
      </div>
      <Card card={cardDetails} />
    </>
  );
};

export default CardSection;
