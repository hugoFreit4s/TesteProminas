'use client';

import React, { useState } from "react";

const PerguntasFrequentes = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <section className="flex align-center justify-center text-[32px] mt-[70px]" style={{ fontFamily: "Krona One, sans-serif" }}>
            <h1>Perguntas Frequentes</h1>
            <div className="relative w-[100px] mr-[40px]">
                <span id="dropdown-menu" className="text-white py-5 cursor-pointer w-[50px]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500", fontSize: "15px" }}
                    onClick={toggleDropdown}>Nossas Áreas</span>
                {dropdownVisible && (
                    <ul id="dropdown" className="cursor-pointer bg-white text-black py-2 rounded-md w-[250px] mt-[20px] border-2 border-[#7500FF]" >
                        <p className="px-4 py-2 hover:bg-gray-200">Tecnologia da Informação</p>
                    </ul>
                )}
            </div>
        </section>
    )
}

export default PerguntasFrequentes;
