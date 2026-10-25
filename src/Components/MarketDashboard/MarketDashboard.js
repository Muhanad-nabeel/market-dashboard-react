import { useState } from "react";
import "./MarketDashboard.css";
import MarketCard from "../MarketCard/MarketCard";

function MarketDashboard() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const markets = [
    {
      symbol: "EUR/USD",
      name: "Euro / US Dollar",
      price: 1.1732,
      change: 0.24,
      category: "Forex",
    },
    {
      symbol: "GBP/USD",
      name: "British Pound / US Dollar",
      price: 1.3441,
      change: -0.18,
      category: "Forex",
    },
    {
      symbol: "USD/JPY",
      name: "US Dollar / Japanese Yen",
      price: 152.31,
      change: 0.42,
      category: "Forex",
    },
    {
      symbol: "XAU/USD",
      name: "Gold / US Dollar",
      price: 4132.5,
      change: 0.71,
      category: "Metals",
    },
    {
      symbol: "BTC/USD",
      name: "Bitcoin / US Dollar",
      price: 108420,
      change: -0.32,
      category: "Crypto",
    },
    {
      symbol: "NASDAQ",
      name: "NASDAQ 100",
      price: 23500,
      change: 0.18,
      category: "Indices",
    },
  ];
  const categories = ["All", "Forex", "Metals", "Crypto", "Indices"];

  const filterMarkets = markets.filter((market) => {
    const searchItem = search.toLowerCase().replace(/[^a-z0-9]/g, "");
    const symbol = market.symbol.toLowerCase().replace(/[^a-z0-9]/g, "");
    const name = market.name.toLowerCase();

    const matchSearch =
      symbol.includes(searchItem) || name.includes(searchItem);

    const matchCategory =
      activeCategory === "All" || market.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <section className="market-dashboard">
      <div className="market-dashboard-container">
        <div className="market-dashboard-header">
          <div>
            <span className="market-dashboard-label">MARKETS</span>
            <h2>Market Overview</h2>
          </div>

          <div className="market-search">
            <i className="fa-solid fa-magnifying-glass"></i>

            <input
              type="text"
              placeholder="Search markets..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>

        <div className="market-categories">
          {categories.map((category) => (
            <button
              className={activeCategory === category ? "active" : ""}
              key={category}
              onClick={() => {
                setActiveCategory(category);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="market-grid">
          {filterMarkets.map((market) => (
            <MarketCard key={market.symbol} market={market} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarketDashboard;
