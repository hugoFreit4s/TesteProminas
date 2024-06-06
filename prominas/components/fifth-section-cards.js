'use client';
import React from 'react';

const FifthSectionCards = ({ image, text, bgSize, bgPosition, onMouseEnter, onMouseLeave }) => {
    return (
        <div 
            className="relative flex justify-center h-[349px] w-[284px] cursor-pointer transition-transform duration-300 transform hover:scale-105" 
            style={{ backgroundImage: `url(${image})`, borderRadius: '4px', textAlign: 'center', backgroundSize: `${bgSize}`, backgroundPosition: `${bgPosition}` }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <p style={{ fontFamily: "Krona One, sans-serif", fontWeight: 400, fontSize: '18px', bottom: '40px', position: 'absolute', width: '275px' }}>{text}</p>
        </div>
    );
}

export default FifthSectionCards;