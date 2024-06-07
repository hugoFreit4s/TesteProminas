import React from 'react';

const SectionSevenCards = ({ image, text, bgSize, bgPosition, gridColumn }) => {
    return (
        <div
            className="flex flex-col items-center justify-center h-[964px] w-full relative" // Adicionamos 'relative' para facilitar o posicionamento absoluto
            style={{ backgroundImage: `url(${image})`, borderRadius: '4px', textAlign: 'center', backgroundSize: `${bgSize}`, backgroundPosition: `${bgPosition}`, gridColumn: `${gridColumn}`, borderRadius: '4px' }}
        >
            <p style={{ fontFamily: "Krona One, sans-serif", fontWeight: 400, fontSize: '32px', width: '275px', marginBottom:'-500px'}}>{text}</p>
            <button className='text-[14px] text-white px-[60px] py-[20px] h-[31px] w-[245px] flex justify-center items-center rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 border 2px-solid' style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', fontFamily: "Krona One, sans-serif", fontWeight: "400", height: '47px' }}>SAIBA MAIS</button>
        </div>
    );
}

export default SectionSevenCards;
