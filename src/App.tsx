import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Welcome from "./components/Welcome";
import Couple from "./components/Couple";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Venue from "./components/Venue";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
        <Ticker />
      </div>
      <div className="font-crimson overflow-x-hidden">
        <Hero />
        <Ticker />
        <Welcome />
        <Couple />
        <Gallery />
        <Events />
        <Venue />
        <Contact />
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
}
