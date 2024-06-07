const Courses = () => {
    return (
        <section className="w-full flex flex-col align-center">
            <h1 className="text-[30px] w-[90%] self-center pb-[50px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Graduação</h1>
            <div className="w-[90%] self-center grid text-[14px]" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', columnGap:'20px' }}>
                <ul style={{ gridColumn: '1', width: 'auto' }}>
                    <li className="py-2 cursor-pointer">Administração</li>
                    <li className="py-2 cursor-pointer">Análise e Desenvolvimento de Sistemas</li>
                    <li className="py-2 cursor-pointer">Artes Visuais</li>
                    <li className="py-2 cursor-pointer">Arquitetura e Urbanismo</li>
                    <li className="py-2 cursor-pointer">Biblioteconomia</li>
                    <li className="py-2 cursor-pointer">Ciência da Computação</li>
                    <li className="py-2 cursor-pointer">Ciências Biológicas</li>
                    <li className="py-2 cursor-pointer">Ciências Contábeis</li>
                    <li className="py-2 cursor-pointer">Ciências Sociais</li>
                    <li className="py-2 cursor-pointer">Educação Especial</li>
                </ul>
                <ul style={{ gridColumn: '2' }}>
                    <li className="py-2 cursor-pointer">Bacharelado em Educação Física</li>
                    <li className="py-2 cursor-pointer">Licenciatura em Educação Física</li>
                    <li className="py-2 cursor-pointer">Ensino Religioso</li>
                    <li className="py-2 cursor-pointer">Empreendedorismo</li>
                    <li className="py-2 cursor-pointer">Engenharia Ambiental e Sanitária</li>
                    <li className="py-2 cursor-pointer">Engenharia Civil</li>
                    <li className="py-2 cursor-pointer">Engenharia de Controle e Automação</li>
                    <li className="py-2 cursor-pointer">Engenharia de Produção</li>
                    <li className="py-2 cursor-pointer">Engenharia Elétrica</li>
                    <li className="py-2 cursor-pointer">Engenharia Mecânica</li>
                </ul>
                <ul style={{ gridColumn: '3'}}>
                    <li className="py-2 cursor-pointer">Filosofia</li>
                    <li className="py-2 cursor-pointer">Física</li>
                    <li className="py-2 cursor-pointer">Geografia</li>
                    <li className="py-2 cursor-pointer">Geoprocessamento</li>
                    <li className="py-2 cursor-pointer">Gestão Ambiental</li>
                    <li className="py-2 cursor-pointer">Gestão de Cidades Inteligentes</li>
                    <li className="py-2 cursor-pointer">Gestão de Recursos Humanos</li>
                    <li className="py-2 cursor-pointer">Gestão Financeira</li>
                    <li className="py-2 cursor-pointer">Gestão Pública</li>
                    <li className="py-2 cursor-pointer">História</li>
                </ul>
                <ul style={{ gridColumn: '4' }}>
                    <li className="py-2 cursor-pointer">Bacharelado em Letras-Libras</li>
                    <li className="py-2 cursor-pointer">Licenciatura em Letras-Libras</li>
                    <li className="py-2 cursor-pointer">Letras-Português</li>
                    <li className="py-2 cursor-pointer">Letras-Português e Espanhol</li>
                    <li className="py-2 cursor-pointer">Letras-Português e Inglês</li>
                    <li className="py-2 cursor-pointer">Logística</li>
                    <li className="py-2 cursor-pointer">Marketing</li>
                    <li className="py-2 cursor-pointer">Matemática</li>
                    <li className="py-2 cursor-pointer">Pedagogia</li>
                    <li className="py-2 cursor-pointer">Processos Gerenciais</li>
                </ul>
                <ul style={{ gridColumn: '5' }}>
                    <li className="py-2 cursor-pointer">Psicopedagogia</li>
                    <li className="py-2 cursor-pointer">Publicidade e Propaganda</li>
                    <li className="py-2 cursor-pointer">Química</li>
                    <li className="py-2 cursor-pointer">Segurança no Trabalho</li>
                    <li className="py-2 cursor-pointer">Serviço Social</li>
                    <li className="py-2 cursor-pointer">Serviços Jurídicos e Notariais</li>
                    <li className="py-2 cursor-pointer">Sistemas de Telecomunicações</li>
                    <li className="py-2 cursor-pointer">Sistemas para Internet</li>
                    <li className="py-2 cursor-pointer">Sistemas de Informação</li>
                    <li className="py-2 cursor-pointer">Teologia</li>
                </ul>
            </div>
        </section>
    )
}

export default Courses;