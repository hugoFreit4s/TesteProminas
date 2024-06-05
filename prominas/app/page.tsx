import Navbar from "../Components/navbar";
import SecondaryNavbar from "../Components/secondarynavbar";

export default function Home() {
  return (
    <main className="p-0 relative">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("/headerbg.jpg")', filter: 'blur(10px)', height: '809px', backgroundPosition: '0% 100%' }}></div>

      <div className="relative z-1">
        <Navbar />
        <SecondaryNavbar />
      </div>
    </main>
  );
}
