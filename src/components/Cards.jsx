import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] bg-white px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-2xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img className="w-20 mx-auto  mt-[-3rem]" src={Single} alt="" />
          <h2 className="text-2xl font-bold text-center py-8">Basic</h2>
          <p className="text-center text-3xl font-bold ">$99</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">10 Users</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 active:text-white">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-2xl rounded-lg flex flex-col p-2 my-1 hover:scale-110 duration-300">
          <img className="w-20 mx-auto  mt-[-3rem]" src={Triple} alt="" />
          <h2 className="text-3xl font-bold text-center py-8">Pro</h2>
          <span className="absolute text-sm font-medium border rounded-2xl p-1 bg-[#00df9a] mt-[-1.4rem] ml-[-1rem]">
            Most Popular
          </span>
          <p className="text-center text-3xl font-bold ">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">20 Users</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 active:text-white">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-2xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img className="w-20 mx-auto  mt-[-3rem]" src={Double} alt="" />
          <h2 className="text-2xl font-bold text-center py-8">Standard</h2>
          <p className="text-center text-3xl font-bold ">$49</p>
          <div className="font-medium text-center">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">50 Users</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 active:text-white">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
