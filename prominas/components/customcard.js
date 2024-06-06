"use client";

import React from 'react';

const CustomCard = () => {
    return (
        <div className="relative bg-gray-200 rounded-lg shadow-lg p-6 w-[384px] h-[630px]">
            <div className="curve"></div>
            <div className="absolute bottom-[315px] w-[80px] right-[0px] h-[50%] bg-green-500"></div>
            <div className="absolute bottom-0 left-0 w-[100%] h-[50%] bg-red-500"></div>
            {/* <div className="absolute bottom-4 right-4 w-12 h-12 bg-yellow-500 rounded-full"></div> */}
            <h2 className="text-xl font-bold mt-6">Custom Card</h2>
            <p className="mt-2 text-gray-700">This is a custom card with shapes created using Tailwind CSS.</p>
        </div>
    );
}

export default CustomCard;
