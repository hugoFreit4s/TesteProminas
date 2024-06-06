'use client';

import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const FourthSection = () => {
    return (
        <div className="grid items-center justify-center mt-[70px]" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="ml-[50px]">
                <h2 className="text-[32px] ml-[20px]" style={{ fontFamily: "Krona One, sans-serif", gridColumn: '1' }}>Construa seu amanhã conosco</h2>
                <p className="text-[22px] ml-[20px] mt-[80px]" style={{ fontFamily: "Poppins, sans-serif", gridColumn: '1' }}>Com foco em inovação e qualidade, seja nos cursos presenciais ou online,
                    utilizamos as mais modernas tecnologias para uma comunicação mais eficiente e eficaz entre professor e aluno,
                    destinados à formação de profissionais qualificados, capazes de transformar a realidade socioeconômica do país.</p>
            </div>
            <div className="relative">
                <img className="h-[330px] w-[583px]" src="/mockupnotebook.png" alt="Imagem" style={{ placeSelf: 'center' }} />
                <FaPlayCircle className="absolute top-1/2 left-[300px] transform -translate-x-1/2 -translate-y-1/2 text-gray-700 cursor-pointer text-white" size={60} />
            </div>
        </div>
    )
}

export default FourthSection;