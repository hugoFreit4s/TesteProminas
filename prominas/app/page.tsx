import Navbar from "../components/navbar";
import SecondaryNavbar from "../components/secondarynavbar";
import SecondSection from "../components/second-section";
import ThirdSection from "../components/third-section";
import FourthSection from "../components/fourth-section";
import FifthSection from "../components/fifth-section";

export default function Home() {
  return (
    <div className="p-0 w-full" style={{ display: "grid", gridTemplateRows: "820px 200px 710px 550px 700px" }}>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("/headerbg.jpg")', filter: 'blur(5px)', height: '809px', backgroundPosition: '0% 100%', gridRow: "1" }}></div>

      <div className="relative grid-row-1" style={{ gridRow: "1" }}>
        <Navbar />
        <SecondaryNavbar />
        <p style={{ fontSize: "60px", fontFamily: "Krona One, sans-serif", fontWeight: "400", position: "absolute", top: "50%", left: "10%" }}>CONHEÇA A <br></br>FACULDADE ÚNICA</p>
      </div>

      <div className="w-full" style={{ gridRow: "2" }}>
        <SecondSection />
      </div>

      <div className="w-full" style={{ gridRow: "3" }}>
        <ThirdSection />
      </div>

      <div className="w-full" style={{ gridRow: "4" }}>
        <FourthSection />
      </div>

      <div className="w-full" style={{ gridRow: "5" }}>
        <FifthSection text="CURSOS COM NOTA MÁXIMA NA AVALIAÇÃO DO MEC" image="/fachadamec.jpg" />
      </div>
    </div>
  );
}