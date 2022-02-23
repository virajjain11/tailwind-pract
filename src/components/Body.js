import React from 'react';
import Features from './Features';
import ReserveASeatButton from './ReserveASeatButton';
import ReserveASeatText from './ReserveASeatText';

export default function Body() {
    return (
        <div className="">
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
                <Features />
                <div>
                    {/* <div className=" bg-gray-700 mx-5 my-2  m-auto rounded-xl">
            <img className="mx-auto  mt-4 p-2" src="./img/raj.jpg" alt="img" />
          </div> */}
                    <div>
                        <ReserveASeatButton />
                        <div className="mt-3">
                            <ReserveASeatText />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
