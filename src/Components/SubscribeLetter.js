import React from "react";
import bgimg from "../assets/newssection-bg.jpg";
import Footer from "./Footer";
const SubscribeLetter = () => {
  return (
    <div
      className="w-full block p-6 bg-white border border-gray-200 bg-center"
      style={{ backgroundImage: "url(" + bgimg + ")", height: "320px" }}
    >
      <div className="w-[600px] ms-[100px] mt-5">
        <h3 className="font-bold text-lg">Subscribe To Our News-Letter</h3>
        <div class="mb-2">
          <label
            class="block mb-2 text-sm font-medium"
          >
            Email address
          </label>
          <input
            type="text"
            id="success"
            class="bg-green-50 border text-sm rounded-lg  block w-full p-2.5"
            placeholder=""
          />
          <p class="mt-2 text-sm">
            <span class="font-medium">We'll never share your email with anyone else.</span>
          </p>
        </div>
       
        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Agree All the Terms & Services</label>

        <div>
            <button type="button" class="mt-5 focus:outline-none text-white bg-green-700  font-medium rounded-lg text-sm px-[40px] py-[10px] me-2 mb-2">Green</button> 
        </div>

      </div>
      
    </div>
  );
};

export default SubscribeLetter;
