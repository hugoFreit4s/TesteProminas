import Navbar from "../Components/navbar";
import SecondaryNavbar from "../Components/secondarynavbar";
import SecondSection from "../Components/second-section";
import ThirdSection from "../Components/third-section";

export default function Home() {
  return (
    <div className="p-0 w-full" style={{ display: "grid", gridTemplateRows: "820px 200px 710px" }}>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("/headerbg.jpg")', filter: 'blur(5px)', height: '809px', backgroundPosition: '0% 100%', gridRow: "1" }}></div>

      <div className="relative grid-row-1" style={{ gridRow: "1" }}>
        <Navbar />
        <SecondaryNavbar />
        <p style={{ fontSize: "60px", fontFamily: "Krona One, sans-serif", fontWeight: "400", position:"absolute", top:"50%", left:"10%" }}>CONHEÇA A <br></br>FACULDADE ÚNICA</p>
      </div>

      <div className="w-full" style={{ gridRow: "2" }}>
        <SecondSection /> 
      </div>

      <div className="w-full" style={{ gridRow: "3" }}>
        <ThirdSection />
      </div>
    </div>
  );
}