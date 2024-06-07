const KnowMore = () => {
    return (
        <div className="flex flex-col self-center w-[80%]">
            <div>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: '700' }}>Saiba mais da Faculdade Única</p>
            </div>
            <div className="flex space-between space-x-10">
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: '700' }}>Pós Graduação</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: '700' }}>Segunda Graduação</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: '700' }}>Disciplinas Isoladas</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: '700' }}>Cursos Livres</p>
            </div>
            <div className="flex space-between space-x-11">
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: '500', cursor: 'pointer' }}>Ver nossos cursos</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: '500', cursor: 'pointer' }}>Ver nossos cursos</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: '500', marginLeft: '90px', cursor: 'pointer' }}>Ver nossos cursos</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: '500', marginLeft: '90px', cursor: 'pointer'}}>Ver nossos cursos</p>
            </div>
        </div>
    )
}

export default KnowMore;