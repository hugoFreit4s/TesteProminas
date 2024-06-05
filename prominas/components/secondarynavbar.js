'use client';

import React from "react";
import Link from 'next/link';

const SecondaryNavbar = () => {
    return (
        <div className="w-full bg-[#494949] bg-opacity-40" style={{ height: "91px" }}>
            <div className="container mx-auto h-full flex justify-around items-center w-full">
                <Link href="/">
                    <img src="/logo.svg" alt="Logo" className="cursor-pointer" style={{ height: '55.94px', width: '182px' }} />
                </Link>
                <div className="relative">
                    <input type="text" placeholder="Pesquise por um curso" className="px-10 py-2 text-black w-[355px] h-[48px]" style={{borderRadius: '2px' }} />
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M-0 25l8-8"></path>
                            <circle cx="13" cy="10" r="7"></circle>
                        </svg>
                    </span>
                </div>
                <div className="relative">
                    <span className="text-white py-1 cursor-pointer" onMouseEnter={() => document.getElementById("dropdown").classList.remove("hidden")} onMouseLeave={() => document.getElementById("dropdown").classList.add("hidden")}>Nossas Áreas</span>
                    <ul id="dropdown" className="absolute hidden cursor-pointer bg-white text-black py-2 rounded-lg shadow-lg" onMouseEnter={() => document.getElementById("dropdown").classList.remove("hidden")} onMouseLeave={() => document.getElementById("dropdown").classList.add("hidden")}>
                        <li className="px-4 py-2 hover:bg-gray-200">Opção 1</li>
                        <li className="px-4 py-2 hover:bg-gray-200">Opção 2</li>
                        <li className="px-4 py-2 hover:bg-gray-200">Opção 3</li>
                    </ul>
                </div>
                <ul className="flex items-center space-x-8">
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
                <button className="text-white px-4 py-2 rounded-lg bg-transparent border border-white w-[178px]">JÁ SOU ALUNO</button>
            </div>
        </div>
    );
};

export default SecondaryNavbar;
