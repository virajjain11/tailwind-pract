import React from 'react';
import FeaturesTab from './FeaturesTab';

export default function Body() {
  return (
    <div className="text-center">
      <h1 className="font-bold text-5xl md:w-2/4 m-auto">
        Become an Exceptional Speaker. Speak With{' '}
        <span className="text-custom">Confidence and Clarity</span>.
      </h1>
      <p className="my-5 w-2/3 m-auto text-lg ">
        Learn how I gave over <span className="text-custom">100 keynote </span>
        speeches in <span className="text-custom">23 countries </span>before
        even turning 21 and built a social media empire on the side
      </p>
      <div className="flex justify-center lg:flex-row lg:w-10/12 text-white mx-auto  flex-col w-full ">
        <div className="lg:w-2/4  w-full bg-gray-700 mx-5 rounded-xl">
          <div className="">
            <div className="p-3 grid grid-cols-2 gap-x-2 gap-y-2">
              <FeaturesTab image={'./img/time.svg'} text={'3 Hours'} />
              <FeaturesTab image={'./img/session.svg'} text={'Live Session'} />
              <FeaturesTab image={'./img/calendar.svg'} text={'30 Mar 2021'} />
              <FeaturesTab image={'./img/hour.svg'} text={'7 to 11 AM'} />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col md:flex-col ">
            <img
              src="./img/intro.svg"
              alt=""
              className="sm: w-1/4 lg:w-full mx-auto"
            />

            <div className="flex lg:flex-col md:flex-col  sm:items-center justify-center items-start">
              <h1 className="font-bold text-3xl tracking-widest my-4">
                Raj Shamani
              </h1>
              <p className="pr-5">
                Learn how I gave over 100 keynote speeches in 23 countries
                before even turning 21 and built a social media empire on the
                side.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" bg-gray-700 mx-5 my-2  m-auto rounded-xl">
            <img className="mx-auto  mt-4 p-2" src="./img/raj.jpg" alt="img" />
          </div>
          <button className="bg-custom lg:w-10/12 lg:p-0 lg:h-1/5 shadow-2xl my-5 rounded-xl text-2xl w-354 h-full p-2 hover:bg-hov">
            Reserve Seat for ₹499 <span className="line-through	">₹1,999</span>
          </button>
          <div className="text-gray-600">
            <p className="font-medium">
              Reserve a seat before March 17, 2021 to unlock
            </p>
            <p className="font-bold">Bonuses worth ₹55,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
