import { useState, useEffect } from "react";
import axios from "axios";
import "./MarketDashboard.css";
import MarketCard from "../MarketCard/MarketCard";

function MarketDashboard() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // const markets = [
  //   {
  //     symbol: "EUR/USD",
  //     name: "Euro / US Dollar",
  //     price: 1.1732,
  //     change: 0.24,
  //     category: "Forex",
  //   },
  //   {
  //     symbol: "GBP/USD",
  //     name: "British Pound / US Dollar",
  //     price: 1.3441,
  //     change: -0.18,
  //     category: "Forex",
  //   },
  //   {
  //     symbol: "USD/JPY",
  //     name: "US Dollar / Japanese Yen",
  //     price: 152.31,
  //     change: 0.42,
  //     category: "Forex",
  //   },
  //   {
  //     symbol: "XAU/USD",
  //     name: "Gold / US Dollar",
  //     price: 4132.5,
  //     change: 0.71,
  //     category: "Metals",
  //   },
  //   {
  //     symbol: "BTC/USD",
  //     name: "Bitcoin / US Dollar",
  //     price: 108420,
  //     change: -0.32,
  //     category: "Crypto",
  //   },
  //   {
  //     symbol: "NASDAQ",
  //     name: "NASDAQ 100",
  //     price: 23500,
  //     change: 0.18,
  //     category: "Indices",
  //   },
  // ];
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
  const marketCategories = {
    "EUR/USD": "Forex",
    "GBP/USD": "Forex",
    "USD/JPY": "Forex",
    "XAU/USD": "Metals",
    "BTC/USD": "Crypto",
    NASDAQ: "Indices",
  };
  useEffect(() => {
    const getMarkets = async () => {
      const symbols = [
        "EUR/USD",
        "GBP/USD",
        "USD/JPY",
        "XAU/USD",
        "BTC/USD",
        "NASDAQ",
      ];

      try {
        const requests = symbols.map((symbol) => {
          return axios.get(
            `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${process.env.REACT_APP_TWELVE_DATA_API_KEY}`,
          );
        });
        const responses = await Promise.allSettled(requests);
        const successfulResponses = responses.filter(
          (response) => response.status === "fulfilled",
        );
        const data = successfulResponses.map((response) => response.value.data);
        const marketsData = data.map((item) => {
          const category = marketCategories[item.symbol];

          return {
            symbol: item.symbol,
            name: item.name,
            price: item.close,
            change: item.percent_change,
            category: category,
          };
        });

        // const response = await axios.get(
        //   "https://api.twelvedata.com/quote?symbol=EUR/USD&apikey=1e57f3e47b5443aaa10894b7f22f2111",
        // );
        // const data = responses.data;

        // const market = {
        //   symbol: data.symbol,
        //   name: data.name,
        //   price: data.close,
        //   change: data.percent_change,
        //   category: data.exchange,
        // };
        setMarkets(marketsData);
      } catch (error) {
        setError("Failed to fetch markets. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getMarkets();
  }, []);
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
        {loading && <p>Loading markets...</p>}

        {error && <p>{error}</p>}
        {filterMarkets.length > 0 && (
          <div className="market-grid">
            {filterMarkets.map((market) => (
              <MarketCard key={market.symbol} market={market} />
            ))}
          </div>
        )}
        {!loading && !error && filterMarkets.length === 0 && (
          <div className="no-results">
            <h3>No markets found.</h3>

            <p>Try another search or category.</p>
            <button
              className="reset-filters"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default MarketDashboard;
