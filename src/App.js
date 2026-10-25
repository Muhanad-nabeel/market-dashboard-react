import "./App.css";
import {
  Header,
  Hero,
  TradingCards,
  MarketDashboard,
  Works,
  Location,
  Footer,
} from "./Components";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <TradingCards />
        <MarketDashboard />
        <Works />
        <Location />
        <Footer />
      </main>
    </div>
  );
}

export default App;
