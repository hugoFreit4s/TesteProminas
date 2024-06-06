import React, { useState } from 'react';

const ThemeToggleButton = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className="h-[32px] w-[64px]" onClick={toggleTheme}>
            <div className={`relative flex h-8 w-16 cursor-pointer items-center rounded-full p-1 transition-all duration-500 ${isDark ? 'bg-[#3C3C47]' : 'bg-[#F6F6F7]'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-[#3C3C47] ${isDark ? 'hidden' : 'block'}`}>
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
                <div className={`absolute h-[22px] w-[22px] rounded-full bg-white shadow-md transition-all duration-500 ${isDark ? 'left-[2px]' : 'left-[calc(100%-2px-1.5rem)]'}`}></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-auto text-yellow-400 ${isDark ? 'block' : 'hidden'}`}>
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
            </div>
        </div>
    );
};

export default ThemeToggleButton;
