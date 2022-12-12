import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white py-16 w-full px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your data?
          </h1>
          <p className="text-lg py-1">
            Sign up to our newsletter and stay up to date!
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full rounded-md text-black"
            />
            <button
              className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3
            active:bg-black active:text-[#00df9a] active:border border-[#00df9a]"
            >
              Notify Me
            </button>
          </div>
        </div>
        <p>
          We care about the protection of your data. Read our
          <a
            href="/policy"
            className="text-[#00df9a] ml-1 border-[#00df9a] hover:border-b"
          >
            Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
