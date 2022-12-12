import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="Best dashboard for analysing your data"
        />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#00df9a] text-lg">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="text-2xl font-bold py-2 md:text-4xl sm:text-3xl">
            Manage Data Analytics Properly
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            atque nisi harum sunt, alias laborum odit esse blanditiis iste
            voluptate distinctio sed rerum quae iure nostrum reiciendis veniam
            at cumque!
          </p>
          <button
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text- md:mx-0
         active:bg-black active:text-[#00df9a] active:border border-[#00df9a]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
