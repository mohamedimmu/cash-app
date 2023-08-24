import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Payments from "./components/Payments";
import Banking from "./components/Banking";
import CashCard from "./components/CashCard";
import Investing from "./components/Investing";

function App() {
  return (
    <div className="relative app">
      <Navbar />
      <main>
        <Hero />
        <Payments />
        <Banking />
        <CashCard />
        <Investing />
      </main>
    </div>
  );
}

export default App;
