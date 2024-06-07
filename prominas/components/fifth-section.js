'use client';

import React, { useState } from 'react';
import FifthSectionCards from "../components/fifth-section-cards";

const FifthSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const cardsData = [
        { text: "CURSOS COM NOTA MÁXIMA NA AVALIAÇÃO DO MEC", image: "/fachadamec.jpg", bgSize: 'cover', bgPosition: '' },
        { text: "+ DE 2.500 EMPRESAS E ÓRGÃOS PÚBLICOS CONVENIADOS", image: "/apertodemao.jpg", bgSize: 'cover', bgPosition: 'center' },
        { text: "ESTÁGIO REMUNERADO DESDE OS PRIMEIROS PERÍODOS", image: "/estagioremunerado.png", bgSize: 'cover', bgPosition: '71% 50%' },
        { text: "PROFESSORES MESTRES E DOUTORES", image: "/professora.jpg", bgSize: 'cover', bgPosition: '52% 50%' }
    ];

    return (
        <section className="h-[703px] w-full container ml-auto mr-auto flex flex-col items-center">
            <h1 className='text-[32px] pb-[90px]' style={{fontFamily: "Krona One, sans-serif"}}>Abra novas portas para o seu futuro</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", columnGap: "30px" }}>
                {cardsData.map((card, index) => (
                    <FifthSectionCards
                        key={index}
                        text={card.text}
                        image={card.image}
                        bgSize={card.bgSize}
                        bgPosition={card.bgPosition}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {cardsData.map((_, index) => (
                    <div
                        key={index}
                        className={`h-3 w-3 rounded-full mx-2 transition-colors duration-300 ${activeIndex === index ? 'bg-[#7500FF]' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default FifthSection;