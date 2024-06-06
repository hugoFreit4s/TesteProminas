'use client';

import React from "react";
import Link from 'next/link';

const SecondaryNavbar = () => {
    return (
        <div className="w-full bg-[#494949] bg-opacity-40" style={{ height: "91px" }}>
            <div className="container mx-auto h-full flex justify-around items-center w-full">
                <Link href="/">
                    <img src="/logo.svg" alt="Logo" className="cursor-pointer transition-transform duration-300 transform hover:scale-105" style={{ height: '55.94px', width: '182px' }} />
                </Link>
                <div className="relative w-[30%] mr-[-20px]">
                    <input type="text" placeholder="Pesquise por um curso" className="px-10 py-2 text-black w-[85%] mr-[-65px] h-[50px]" style={{ borderRadius: '2px' }} />
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M-0 25l8-8"></path>
                            <circle cx="13" cy="10" r="7"></circle>
                        </svg>
                    </span>
                </div>
                <div className="relative w-[100px] mr-[40px]">
                    <span id="dropdown-menu" className="text-white py-5 cursor-pointer w-[50px]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500", fontSize: "15px" }}
                        onMouseEnter={() => document.getElementById("dropdown").classList.remove("hidden")} onMouseLeave={() => document.getElementById("dropdown").classList.add("hidden")}>Nossas Áreas</span>
                    <ul id="dropdown" className="absolute hidden cursor-pointer bg-white text-black py-2 rounded-md w-[250px] mt-[20px] border-2 border-[#7500FF]"
                        onMouseEnter={() => document.getElementById("dropdown").classList.remove("hidden")} onMouseLeave={() => document.getElementById("dropdown").classList.add("hidden")}>
                        <li className="px-4 py-2 hover:bg-gray-200">Tecnologia da Informação</li>
                        <li className="px-4 py-2 hover:bg-gray-200">Exatas</li>
                        <li className="px-4 py-2 hover:bg-gray-200">Humanas</li>
                    </ul>
                </div>
                <ul className="flex items-center space-x-8 ml-[-80px]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500", fontSize: "15px" }}>
                    <li>
                        <Link href="/about">
                            Vidas Transformadas
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            FAQ
                        </Link>
                    </li>
                </ul>
                <button className="text-white px-[60px] py-[20px] h-[31px] flex justify-center items-center rounded-lg bg-transparent border border-white w-auto" style={{ fontFamily: "Krona One, sans-serif", fontWeight: "400" }}>JÁ SOU ALUNO</button>
            </div>
        </div>
    );
};

export default SecondaryNavbar;
