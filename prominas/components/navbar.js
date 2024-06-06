"use client";

import React from "react";
import Link from 'next/link';
import ThemeToggleButton from "./themetogglebtn";

const Navbar = () => {
    return (
        <div className="w-full" style={{ height: "59px", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <div className="container px-4 h-full flex justify-center items-center ml-auto mr-auto">
                <div className="w-full flex justify-center">
                    <ul className="hidden md:flex text-white space-x-[110px]" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '17px' }}>
                        <li>
                            <Link href="/about">
                                <p>Graduação</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <p>Segunda Graduação</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <p>Pós Graduação</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <p>Disciplinas Isoladas</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <p>Cursos Grátis</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <p>Bolsas de Estudo</p>
                            </Link>
                        </li>
                        <li>
                            <ThemeToggleButton />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
