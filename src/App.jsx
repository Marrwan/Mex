import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Work from "./components/Work";
import Started from "./components/Started";
import Join from "./components/Join";
import Members from "./components/Members";

function App() {
  return (
    <div className="container max-w-full">
      <Navbar />
      <Hero />
      <Introduction />
      <Problem />
      <Solution />
      <Work />
      <div className="bg-gradient-to-b py-10 from-[#E9F0FF] to-[#F7ECFF]">
        <Started />
        <Join />{" "}
      </div>
      <Members/>
    </div>
  );
}

export default App;
