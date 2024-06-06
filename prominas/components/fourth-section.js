const FourthSection = () => {
    {/* Alinhar */}
    return (
        <div className="grid items-center justify-center mt-[70px]" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="ml-[50px]">
                <h2 className="text-[32px] ml-[20px]" style={{ fontFamily: "Krona One, sans-serif", gridColumn: '1' }}>Construa seu amanhã conosco</h2>
                <p className="text-[22px] ml-[20px] mt-[80px]" style={{ fontFamily: "Poppins, sans-serif", gridColumn: '1' }}>Com foco em inovação e qualidade, seja nos cursos presenciais ou online,
                    utilizamos as mais modernas tecnologias para uma comunicação mais eficiente e eficaz entre professor e aluno,
                    destinados à formação de profissionais qualificados, capazes de transformar a realidade socioeconômica do país.</p>
            </div>
            <div>
                <img className="h-[330px] w-[583px]" src={"/mockupnotebook.png"} alt="Imagem" style={{ placeSelf: 'center' }} />
            </div>
        </div>
    )
}

export default FourthSection;