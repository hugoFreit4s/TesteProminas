'use client';

import React, { useState } from "react";

const PerguntasFrequentes = () => {
    const [dropdowns, setDropdowns] = useState([
        { id: 1, visible: false, title: "O que é Graduação?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac diam tempus, viverra ante in, pellentesque dui. Duis hendrerit dictum eros ut venenatis. Donec eu ex vitae nisi sagittis fringilla sed quis elit. Quisque ac vulputate erat, eu porttitor orci." },
        { id: 2, visible: false, title: "Como funciona a Graduação EaD?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac diam tempus, viverra ante in, pellentesque dui. Duis hendrerit dictum eros ut venenatis. Donec eu ex vitae nisi sagittis fringilla sed quis elit. Quisque ac vulputate erat, eu porttitor orci." },
        { id: 3, visible: false, title: "Por que fazer o EaD?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac diam tempus, viverra ante in, pellentesque dui. Duis hendrerit dictum eros ut venenatis. Donec eu ex vitae nisi sagittis fringilla sed quis elit. Quisque ac vulputate erat, eu porttitor orci." },
        { id: 4, visible: false, title: "Qual faculdade EaD escolher?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac diam tempus, viverra ante in, pellentesque dui. Duis hendrerit dictum eros ut venenatis. Donec eu ex vitae nisi sagittis fringilla sed quis elit. Quisque ac vulputate erat, eu porttitor orci." },
        { id: 5, visible: false, title: "Qual curso EaD fazer?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac diam tempus, viverra ante in, pellentesque dui. Duis hendrerit dictum eros ut venenatis. Donec eu ex vitae nisi sagittis fringilla sed quis elit. Quisque ac vulputate erat, eu porttitor orci." },
        { id: 6, visible: false, title: "Quem faz EaD pode fazer mestrado?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac diam tempus, viverra ante in, pellentesque dui. Duis hendrerit dictum eros ut venenatis. Donec eu ex vitae nisi sagittis fringilla sed quis elit. Quisque ac vulputate erat, eu porttitor orci." },
        { id: 7, visible: false, title: "Quem faz faculdade EaD tem formatura?", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac diam tempus, viverra ante in, pellentesque dui. Duis hendrerit dictum eros ut venenatis. Donec eu ex vitae nisi sagittis fringilla sed quis elit. Quisque ac vulputate erat, eu porttitor orci." },
    ]);

    const toggleDropdown = (id) => {
        setDropdowns(dropdowns.map(dropdown => {
            if (dropdown.id === id) {
                return { ...dropdown, visible: !dropdown.visible };
            }
            return dropdown;
        }));
    };

    return (
        <section className="flex flex-col align-center text-[32px] mt-[30px]" style={{ fontFamily: "Krona One, sans-serif" }}>
            <h1 className="self-center pb-[90px]">Perguntas Frequentes</h1>
            <div className="self-center w-[90%]">
                {dropdowns.map((dropdown, index) => (
                    <div key={dropdown.id}>
                        <span className="text-white py-5 cursor-pointer w-[50px]"
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500", fontSize: "25px", position: 'relative' }}
                            onClick={() => toggleDropdown(dropdown.id)}>
                            {dropdown.title}
                            <div className="w-[30px] h-[38px] px-[6px] mt-[-38px] cursor-pointer" style={{ border: '1px solid white', marginLeft: '100%' }}>X</div>
                            <style jsx>{`span:hover { color: #7500FF; }`}</style>
                        </span>

                        {dropdown.visible && (
                            <ul className="cursor-default rounded-md w-full mt-[20px]" >
                                <p className="px-4 py-2 text-[20px]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "300" }}>
                                    {dropdown.text}
                                </p>
                            </ul>
                        )}
                        {index < dropdowns.length - 1 && <hr className="my-4 mx-0 border-white-500" />}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PerguntasFrequentes;