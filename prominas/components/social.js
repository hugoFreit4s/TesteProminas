const Social = () => {
    return (
        <div className="w-full grid items-center justify-items-center mt-[15%] md:mt-[5%] gap-6 md:gap-10" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
            <div className="flex flex-col items-center md:items-start" style={{ gridColumn: '1' }}>
                <h1 className="text-[16px] md:text-[20px] font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Siga nossa faculdade:</h1>
                <div className="flex space-x-2 md:space-x-4 mt-2">
                    <img className="h-[55px] md:h-[48px] mt-[8px] cursor-pointer" src='/images/facebooklogopng.png' />
                    <img className="h-[55px] md:h-[75px] cursor-pointer" src='/images/instagramlogopng.png' />
                    <img className="h-[45px] md:h-[65px] cursor-pointer" src='/images/youtubelogoiconpng.png' />
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start" style={{ gridColumn: '2' }}>
                <h1 className="text-[16px] md:text-[20px] font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Baixe nosso App:</h1>
                <div className="flex space-x-2 md:space-x-4 mt-2">
                    <img className="h-[60px] md:h-[70px] cursor-pointer" src='/images/baixarappgoogleplay.png' style={{ borderRadius: '20px' }} />
                    <img className="h-[60px] md:h-[70px] cursor-pointer" src='/images/baixarappstore.png' style={{ borderRadius: '20px' }} />
                </div>
            </div>
                <h1 className="text-[20px] w-[350px] font-bold mb-2 md:mb-0 mr-[-200px]" style={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center', gridColumn: '3'  }}>Consulte aqui o cadastro da Instituição no Sistema e-MEC</h1>
                <img className="h-[150px] md:h-[200px] cursor-pointer" src='/images/cadastro-instituicao.png' style={{ gridColumn: '4' }} />
        </div>
    )
}

export default Social;
