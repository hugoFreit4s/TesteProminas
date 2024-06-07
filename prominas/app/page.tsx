import Navbar from "../components/navbar";
import SecondaryNavbar from "../components/secondarynavbar";
import SecondSection from "../components/second-section";
import ThirdSection from "../components/third-section";
import FourthSection from "../components/fourth-section";
import FifthSection from "../components/fifth-section";
import SixthSection from "../components/sixth-section";
import SeventhSection from "../components/seventh-section";
import EighthSection from "../components/eighth-section";
import FrequentQuestions from "../components/frequent-questions";
import Courses from "../components/courses";
import Social from "../components/social";

export default function Home() {
  const images = ['/images/apertodemao.jpg', '/images/brasil.png'];
  return (
    <div className="p-0 w-full h-auto" style={{ display: "grid", gridTemplateRows: "820px 200px 710px 550px 700px 1200px 980px 650px 900px, 500px, 400px" }}>
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
        <FifthSection />
      </div>

      <div className="w-full" style={{ gridRow: "6" }}>
        <SixthSection />
      </div>

      <div className="w-full" style={{ gridRow: "7" }}>
        <SeventhSection />
      </div>

      <div className="w-full mt-[122px]" style={{ gridRow: "8" }}>
        <EighthSection />
      </div>

      <div className="w-full mt-[122px]" style={{ gridRow: "9" }}>
        <FrequentQuestions />
      </div>

      <div className="w-full mt-[30px]" style={{ gridRow: "10" }}>
        <Courses />
      </div>

      <div className="w-full mt-[30px]" style={{ gridRow: "11" }}>
        <Social />
      </div>
    </div>
  );
}