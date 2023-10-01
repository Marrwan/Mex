import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Problem from "./components/Problem";
import Solution from "./components/Solution";

function App() {
  return (
    <div className="container max-w-full">
      <Navbar />
      <Hero />
      <Introduction/>
      <Problem/>
      <Solution/>
    </div>
  );
}

export default App;
