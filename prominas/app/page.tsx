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
import KnowMore from "../components/knowmore";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="p-0 w-full h-auto grid" style={{ gridTemplateRows: "repeat(13, auto)" }}>
      <div className="absolute inset-0 bg-cover bg-center z-0 w-full" style={{ backgroundImage: 'url("/headerbg.jpg")', filter: 'blur(5px)', height: '809px', backgroundPosition: '0% 100%', gridRow: "1" }}></div>

      <div className="relative" style={{ gridRow: "1" }}>
        <Navbar />
        <SecondaryNavbar />
        <p className="text-4xl md:text-5xl lg:text-6xl font-light mt-[20%] ml-[10%] mb-10" style={{ fontFamily: "Krona One, sans-serif" }}>
          CONHEÇA A <br /> FACULDADE ÚNICA
        </p>
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

      <div className="w-full mt-[15%] md:mt-[5%]" style={{ gridRow: "5" }}>
        <FifthSection />
      </div>

      <div className="w-full" style={{ gridRow: "6" }}>
        <SixthSection />
      </div>

      <div className="w-full mt-[15%] md:mt-[5%]" style={{ gridRow: "7" }}>
        <SeventhSection />
      </div>

      <div className="w-full" style={{ gridRow: "8" }}>
        <EighthSection />
      </div>

      <div className="w-full" style={{ gridRow: "9" }}>
        <FrequentQuestions />
      </div>

      <div className="w-full" style={{ gridRow: "10" }}>
        <Courses />
      </div>

      <div className="w-full" style={{ gridRow: "11" }}>
        <Social />
      </div>

      <div className="w-full flex justify-center" style={{ gridRow: "12" }}>
        <KnowMore />
      </div>

      <div className="w-full" style={{ gridRow: "13" }}>
        <Footer />
      </div>
    </div>
  );
}
