import SectionSevenCards from "../components/section-seven-cards";
import mirrorAndSaveImage from "../utils/imageFlip"

const SeventhSection = () => {
    const imagePath = '/images/card-six-4.png'
    mirrorAndSaveImage(imagePath);
    return (
        <section className="h-[964px] w-full ml-auto mr-auto flex flex-col">
            <h1 className='text-[32px] pb-[90px]' style={{fontFamily: "Krona One, sans-serif"}}>Abra novas portas para o seu futuro</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", columnGap: "0px" }}>
                <SectionSevenCards image="/images/card-six-1.png" text="GRADUAÇÃO" bgSize="cover" bgPosition="center" gridColumn="1"/>
                <SectionSevenCards image="/images/card-six-2.png" text="PÓS ONLINE" bgSize="cover" bgPosition="65%" gridColumn="2"/>
                <SectionSevenCards image="/images/card-six-3.png" text="SEGUNDA GRADUAÇÃO" bgSize="cover" bgPosition="center" gridColumn="3"/>
                <SectionSevenCards image="/images/card-six-4.png" text="DISCIPLINAS ISOLADAS" bgSize="cover" bgPosition="center" gridColumn="4" style={{}}/>
            </div>
        </section>
    );
}

export default SeventhSection;