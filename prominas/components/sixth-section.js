import React from 'react';
import Image from 'next/image';

const SixthSection = () => {
    return (
        <section className="h-[1200px] w-full container ml-auto mr-auto flex flex-col items-center">
            <h1 className='text-[32px] pb-[90px]' style={{ fontFamily: "Krona One, sans-serif" }}>
                Mais que educação, uma transformação
            </h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: '30px' }}>
                <Image
                    src="/images/section6image1.png"
                    alt="Sobreposição de Imagem"
                    width={384}
                    height={630}
                    className='transition-transform duration-300 transform hover:scale-105'
                    style={{cursor: 'pointer', gridColumn: '1', borderRadius: '8px'}}
                />
                <Image
                    src="/images/section6image1.png"
                    alt="Sobreposição de Imagem"
                    width={384}
                    height={630}
                    className='transition-transform duration-300 transform hover:scale-105'
                    style={{cursor: 'pointer', gridColumn: '2', borderRadius: '8px'}}
                />
                <Image
                    src="/images/section6image1.png"
                    alt="Sobreposição de Imagem"
                    width={384}
                    height={630}
                    className='transition-transform duration-300 transform hover:scale-105'
                    style={{cursor: 'pointer', gridColumn: '3', borderRadius: '8px'}}
                />
            </div>
        </section>
    )
}

export default SixthSection;
