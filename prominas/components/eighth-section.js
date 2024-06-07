'use client';
import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const FirstSVG = () => (
    <svg width="431" height="481" viewBox="0 0 431 481" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute transform translate-x-[1100px] translate-y-[150px]">
        <mask id="mask0_1_224" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="481" height="481">
            <path d="M480.422 0.55127L0 480.974H348.408L480.422 348.959V0.55127Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1_224)">
            <path d="M480.422 0.55127H0V480.974H480.422V0.55127Z" fill="url(#paint0_linear_1_224)" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_1_224" x1="49.1938" y1="408.602" x2="529.616" y2="408.602" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7500FF" />
                <stop offset="0.04" stopColor="#7500FF" />
                <stop offset="1" stopColor="#A68BFF" />
            </linearGradient>
        </defs>
    </svg>
);

const SecondSVG = () => (
    <svg width="429" height="480" viewBox="0 0 429 481" xmlns="http://www.w3.org/2000/svg" className="absolute transform translate-x-[1100px] translate-y-[0px]">
        <mask id="mask0_1_229" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="482" height="481">
            <path d="M0.862305 0L481.285 480.502V132.015L349.349 0H0.862305Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1_229)">
            <path d="M481.285 0H0.862305V480.422H481.285V0Z" fill="url(#paint0_linear_1_229)" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_1_229" x1="46.6364" y1="396.52" x2="527.059" y2="396.52" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0059FF" />
                <stop offset="0.92" stopColor="#009CFF" />
                <stop offset="1" stopColor="#009CFF" />
            </linearGradient>
        </defs>
    </svg>
);

const EighthSection = () => {
    return (
        <section className="w-full h-[612px] bg-[#7500FF] mt-0 relative">
            <div className="flex overflow-hidden relative w-full h-full">
                <FirstSVG />
                <SecondSVG />
            </div>
            <div className="absolute inset-0 flex flex-col items-center">
                <h1 className="text-3xl font-krona-one text-white font-semibold mt-[80px]" style={{ gridRow: '1' }}>
                    Abra novas portas para o seu futuro
                </h1>
                <div className='flex items-start mt-[50px]'>
                    <div className='backdrop-blur h-[332px] w-[384px] bg-[#A68BFF66] mr-[50px] flex flex-col cursor-pointer transition-transform duration-300 transform hover:scale-105'
                        style={{ gridRow: '2', marginBottom: '100px' }}>
                        <div className='h-[145px] w-[300px] bg-gradient-to-r from-[#A68BFF66] to-[#A68BFF00] mt-[40px] self-center'
                            style={{ backgroundImage: 'url(/images/section8-image1.jpg)', backgroundSize: 'cover', backgroundPosition: '0% 40%', borderRadius: '9px', border: '2px solid black' }}>
                        </div>
                        <div className='h-[55px] w-[55px] bg-white-500 mt-[20px] ml-[70px]'
                            style={{ backgroundImage: 'url(/images/section8-image1.jpg)', backgroundSize: 'cover', borderRadius: '50px', border: '2px solid black' }}>
                        </div>
                        <h1 className='text-[15px] ml-[140px] mt-[-50px] font-semibold'>PEDRO ALVARENGA ASSIS</h1>
                        <h1 className='text-[10px] ml-[140px] font-normal'>Nome do curso</h1>
                        <div className='w-[250px] h-[40px] bg-[#ffff] self-center mt-[30px] rounded-3xl'>
                            <img src='/images/gpng.png' className='h-[50px] mt-[-5px]' />
                            <FaPlayCircle className="absolute top-[110px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 cursor-pointer text-white" size={60} />
                            <p className='text-black mt-[-37px] ml-[45px] font-medium'>Avaliações Google</p>
                            <svg width="53" height="10" viewBox="0 0 53 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[-16px] ml-[180px]'>
                                <path d="M5.5777 0L6.73581 3.56429H10.4835L7.45156 5.76714L8.60967 9.33143L5.5777 7.12858L2.54573 9.33143L3.70384 5.76714L0.671875 3.56429H4.41959L5.5777 0Z" fill="#FFBC02" />
                                <path d="M16.2105 -0.00012207L17.3686 3.56417H21.1163L18.0844 5.76702L19.2425 9.33131L16.2105 7.12846L13.1785 9.33131L14.3367 5.76702L11.3047 3.56417H15.0524L16.2105 -0.00012207Z" fill="#FFBC02" />
                                <path d="M26.836 -0.00012207L27.9941 3.56417H31.7418L28.7099 5.76702L29.868 9.33131L26.836 7.12846L23.804 9.33131L24.9621 5.76702L21.9302 3.56417H25.6779L26.836 -0.00012207Z" fill="#FFBC02" />
                                <path d="M37.4615 -0.00012207L38.6196 3.56417H42.3673L39.3353 5.76702L40.4935 9.33131L37.4615 7.12846L34.4295 9.33131L35.5876 5.76702L32.5557 3.56417H36.3034L37.4615 -0.00012207Z" fill="#FFBC02" />
                                <path d="M48.0943 -0.00012207L49.2524 3.56417H53.0001L49.9682 5.76702L51.1263 9.33131L48.0943 7.12846L45.0623 9.33131L46.2204 5.76702L43.1885 3.56417H46.9362L48.0943 -0.00012207Z" fill="#FFBC02" />
                            </svg>
                        </div>
                    </div>

                    <div className='backdrop-blur h-[332px] w-[384px] bg-[#A68BFF66] mr-[50px] flex flex-col cursor-pointer transition-transform duration-300 transform hover:scale-105'
                        style={{ gridRow: '2', marginBottom: '100px' }}>
                        <div className='h-[145px] w-[300px] bg-gradient-to-r from-[#A68BFF66] to-[#A68BFF00] mt-[40px] self-center'
                            style={{ backgroundImage: 'url(/images/section8-image1.jpg)', backgroundSize: 'cover', backgroundPosition: '0% 40%', borderRadius: '9px', border: '2px solid black' }}>
                        </div>
                        <div className='h-[55px] w-[55px] bg-white-500 mt-[20px] ml-[70px]'
                            style={{ backgroundImage: 'url(/images/section8-image1.jpg)', backgroundSize: 'cover', borderRadius: '50px', border: '2px solid black' }}>
                        </div>
                        <h1 className='text-[15px] ml-[140px] mt-[-50px] font-semibold'>PEDRO ALVARENGA ASSIS</h1>
                        <h1 className='text-[10px] ml-[140px] font-normal'>Nome do curso</h1>
                        <div className='w-[250px] h-[40px] bg-[#ffff] self-center mt-[30px] rounded-3xl'>
                            <img src='/images/gpng.png' className='h-[50px] mt-[-5px]' />
                            <FaPlayCircle className="absolute top-[110px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 cursor-pointer text-white" size={60} />
                            <p className='text-black mt-[-37px] ml-[45px] font-medium'>Avaliações Google</p>
                            <svg width="53" height="10" viewBox="0 0 53 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[-16px] ml-[180px]'>
                                <path d="M5.5777 0L6.73581 3.56429H10.4835L7.45156 5.76714L8.60967 9.33143L5.5777 7.12858L2.54573 9.33143L3.70384 5.76714L0.671875 3.56429H4.41959L5.5777 0Z" fill="#FFBC02" />
                                <path d="M16.2105 -0.00012207L17.3686 3.56417H21.1163L18.0844 5.76702L19.2425 9.33131L16.2105 7.12846L13.1785 9.33131L14.3367 5.76702L11.3047 3.56417H15.0524L16.2105 -0.00012207Z" fill="#FFBC02" />
                                <path d="M26.836 -0.00012207L27.9941 3.56417H31.7418L28.7099 5.76702L29.868 9.33131L26.836 7.12846L23.804 9.33131L24.9621 5.76702L21.9302 3.56417H25.6779L26.836 -0.00012207Z" fill="#FFBC02" />
                                <path d="M37.4615 -0.00012207L38.6196 3.56417H42.3673L39.3353 5.76702L40.4935 9.33131L37.4615 7.12846L34.4295 9.33131L35.5876 5.76702L32.5557 3.56417H36.3034L37.4615 -0.00012207Z" fill="#FFBC02" />
                                <path d="M48.0943 -0.00012207L49.2524 3.56417H53.0001L49.9682 5.76702L51.1263 9.33131L48.0943 7.12846L45.0623 9.33131L46.2204 5.76702L43.1885 3.56417H46.9362L48.0943 -0.00012207Z" fill="#FFBC02" />
                            </svg>
                        </div>
                    </div>

                    <div className='backdrop-blur h-[332px] w-[384px] bg-[#A68BFF66] mr-[50px] flex flex-col cursor-pointer transition-transform duration-300 transform hover:scale-105'
                        style={{ gridRow: '2', marginBottom: '100px' }}>
                        <div className='h-[145px] w-[300px] bg-gradient-to-r from-[#A68BFF66] to-[#A68BFF00] mt-[40px] self-center'
                            style={{ backgroundImage: 'url(/images/section8-image1.jpg)', backgroundSize: 'cover', backgroundPosition: '0% 40%', borderRadius: '9px', border: '2px solid black' }}>
                        </div>
                        <div className='h-[55px] w-[55px] bg-white-500 mt-[20px] ml-[70px]'
                            style={{ backgroundImage: 'url(/images/section8-image1.jpg)', backgroundSize: 'cover', borderRadius: '50px', border: '2px solid black' }}>
                        </div>
                        <h1 className='text-[15px] ml-[140px] mt-[-50px] font-semibold'>PEDRO ALVARENGA ASSIS</h1>
                        <h1 className='text-[10px] ml-[140px] font-normal'>Nome do curso</h1>
                        <div className='w-[250px] h-[40px] bg-[#ffff] self-center mt-[30px] rounded-3xl'>
                            <img src='/images/gpng.png' className='h-[50px] mt-[-5px]' />
                            <FaPlayCircle className="absolute top-[110px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 cursor-pointer text-white" size={60} />
                            <p className='text-black mt-[-37px] ml-[45px] font-medium'>Avaliações Google</p>
                            <svg width="53" height="10" viewBox="0 0 53 10" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[-16px] ml-[180px]'>
                                <path d="M5.5777 0L6.73581 3.56429H10.4835L7.45156 5.76714L8.60967 9.33143L5.5777 7.12858L2.54573 9.33143L3.70384 5.76714L0.671875 3.56429H4.41959L5.5777 0Z" fill="#FFBC02" />
                                <path d="M16.2105 -0.00012207L17.3686 3.56417H21.1163L18.0844 5.76702L19.2425 9.33131L16.2105 7.12846L13.1785 9.33131L14.3367 5.76702L11.3047 3.56417H15.0524L16.2105 -0.00012207Z" fill="#FFBC02" />
                                <path d="M26.836 -0.00012207L27.9941 3.56417H31.7418L28.7099 5.76702L29.868 9.33131L26.836 7.12846L23.804 9.33131L24.9621 5.76702L21.9302 3.56417H25.6779L26.836 -0.00012207Z" fill="#FFBC02" />
                                <path d="M37.4615 -0.00012207L38.6196 3.56417H42.3673L39.3353 5.76702L40.4935 9.33131L37.4615 7.12846L34.4295 9.33131L35.5876 5.76702L32.5557 3.56417H36.3034L37.4615 -0.00012207Z" fill="#FFBC02" />
                                <path d="M48.0943 -0.00012207L49.2524 3.56417H53.0001L49.9682 5.76702L51.1263 9.33131L48.0943 7.12846L45.0623 9.33131L46.2204 5.76702L43.1885 3.56417H46.9362L48.0943 -0.00012207Z" fill="#FFBC02" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EighthSection;
