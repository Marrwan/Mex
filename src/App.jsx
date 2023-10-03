import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Work from "./components/Work";

function App() {
  return (
    <div className="container max-w-full">
      <Navbar />
      <Hero />
      <Introduction/>
      <Problem/>
      <Solution/>
      <Work/>
    </div>
  );
}

export default App;
