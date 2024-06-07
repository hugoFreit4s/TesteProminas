'use client';

import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const FourthSection = () => {
    return (
        <div className="grid h-auto mt-[15%]" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-[32px]" style={{ fontFamily: "Krona One, sans-serif" }}>
                    Construa seu amanhã conosco
                </h2>
                <p className="text-[22px] mt-[80px] w-[70%]" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Com foco em inovação e qualidade, seja nos cursos presenciais ou online, utilizamos as mais modernas tecnologias para uma comunicação mais eficiente e eficaz entre professor e aluno, destinados à formação de profissionais qualificados, capazes de transformar a realidade socioeconômica do país.
                </p>
            </div>
            <div className="relative flex items-center justify-center">
                <img className="h-[330px] w-[583px]" src="/mockupnotebook.png" alt="Imagem" />
                <FaPlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 cursor-pointer text-white" size={60} />
            </div>
        </div>

    )
}

export default FourthSection;