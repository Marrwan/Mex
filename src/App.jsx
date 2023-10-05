import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Work from "./components/Work";
import Started from "./components/Started";
import Join from "./components/Join";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container max-w-full">
      <Navbar />
      <Hero />
      <Introduction />
      <Problem />
      <Solution />
      <Work />
      <div className="h-max bg-gradient-to-b py-10 from-[#E9F0FF] to-[#F7ECFF]">
        <Started />
        <Join />{" "}
      </div>
      <Members/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
