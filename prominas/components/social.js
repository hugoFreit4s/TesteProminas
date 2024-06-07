const Social = () => {
    return (
        <div className="w-full grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div style={{ gridColumn: '1' }}>
                <h1 className="text-[20px] font-bold" style={{ fontFamily: 'Poppins, sans-serif', gridColumn: '1' }}>Siga nossa faculdade:</h1>
                <img className="h-[50px]" src='/images/facebooklogopng.png' />
                <img className="h-[80px]" src='/images/instagramlogopng.png' />
                <img className="h-[80px]" src='/images/youtubelogoiconpng.png' />
            </div>
            <div style={{ gridColumn: '2' }}>
                <h1 className="text-[20px] font-bold" style={{ fontFamily: 'Poppins, sans-serif', gridColumn: '2' }}>Siga nossa faculdade:</h1>
                <img className="h-[80px]" src='/images/baixarappgoogleplay.png' style={{ borderRadius: '20px' }} />
                <img className="h-[80px]" src='/images/baixarappstore.png' style={{ borderRadius: '20px' }} />
            </div>
            <div style={{ gridColumn: '3' }}>
                <h1 className="text-[20px] font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Consulte aqui o cadastro da Instituição no Sistema e-MEC</h1>
                <img className="h-[200px]" src='/images/cadastro-instituicao.png' />
            </div>
        </div>
    )
}

export default Social;