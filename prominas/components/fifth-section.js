import FifthSectionCards from "../components/fifth-section-cards";

const FifthSection = ({ image, text }) => {
    return (
        <section className="h-[703px] w-full grid grid-rows-[150px] [160px] [500px] container ml-auto mr-auto justify-center" >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", columnGap: "30px" }}>
                <FifthSectionCards text="CURSOS COM NOTA MÁXIMA NA AVALIAÇÃO DO MEC" image="/fachadamec.jpg" bgSize='cover' bgPosition='' />
                <FifthSectionCards text="+ DE 2.500 EMPRESAS E ÓRGÃOS PÚBLICOS CONVENIADOS" image="/apertodemao.jpg" bgSize='cover' bgPosition='center' />
                <FifthSectionCards text="ESTÁGIO REMUNERADO DESDE OS PRIMEIROS PERÍODOS" image="/estagioremunerado.png" bgSize='cover' bgPosition='71% 50%' />
                <FifthSectionCards text="PROFESSORES MESTRES E DOUTORES" image="/professora.jpg" bgSize='cover' bgPosition='52% 50%' />
            </div>
        </section >
    );
}

export default FifthSection;