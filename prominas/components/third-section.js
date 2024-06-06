import React from "react";
import Card from "../components/card";

const ThirdSection = () => {
    return (
        <section className="h-[703px] w-full grid grid-rows-[150px] [160px] [500px] container ml-auto mr-auto" >
            <h1 style={{ fontSize: "32px", fontFamily: "Krona One, sans-serif", placeSelf: "center", gridRow: "1", fontWeight: "400", marginTop: "150px" }} >Perfeita para você! </h1>
            <p style={{ fontSize: "22px", fontFamily: "Poppins, sans-serif", placeSelf: "center", gridRow: "2", textAlign: "center", fontWeight: "500", height: "11%", width: "65%", lineHeight: "35px" }}>Há mais de 22 anos, a Faculdade Única transforma vidas por meio da educação. Com base na ética e na responsabilidade social, com um preço justo e acessível, utilizamos a tecnologia e a inovação para ampliar as possibilidades de ensino de milhares de alunos espalhados por todo o país.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                <Card content="+ de 489 mil Alunos certificados" image="/diploma.png" />
                <Card content="+ de 250 Polos em todo Brasil" image="/brasil.png" />
                <Card content="+ de 900 cursos em diversas modalidades de ensino" image="/curso.png" />
            </div>
        </section >
    );
};

export default ThirdSection;