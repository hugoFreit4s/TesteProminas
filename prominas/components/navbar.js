import React from "react";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="w-full" style={{ height: "59px", backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
            <div className="container px-4 h-full flex justify-center items-center ml-auto mr-auto">
                <ul className="hidden md:flex text-white space-x-[150px] w-full" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '17px' }}>
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
                        <button className="ml-auto mr-4">
                            <img src="https://www.svgrepo.com/show/309493/dark-theme.svg" alt="Tema Escuro" style={{ height: '220px', width: '22px' }} />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
