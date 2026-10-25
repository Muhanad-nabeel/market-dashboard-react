import "./TradingCards.css";

function TradingCards() {
  return (
    <section className="trading-section">
      <h1 className="trading-title">Trade With MyMarket</h1>

      <div className="cards-container">
        <div className="trading-card">
          <h2>Spread</h2>

          <p>
            MyMarket provides some of the market's most competitive spreads,
            starting as low as 0.0 pips.
          </p>
        </div>

        <div className="trading-card">
          <h2>Leverage</h2>

          <p>
            Users can boost their buying power with up to 1:500 leverage, making
            trades more affordable.
          </p>
        </div>

        <div className="trading-card">
          <h2>400+ Currency Pairs</h2>

          <p>
            Access a broad selection of currency pairs, including major, minor,
            and exotic pairs.
          </p>
        </div>

        <div className="trading-card">
          <h2>Fast Execution</h2>

          <p>
            Execute trades efficiently with reliable execution designed for
            active market participants.
          </p>
        </div>

        <div className="trading-card">
          <h2>MT5 Platform</h2>

          <p>
            Trade using a powerful platform with advanced charting, analysis,
            and trading tools.
          </p>
        </div>

        <div className="trading-card">
          <h2>Market Access</h2>

          <p>
            Explore a wide range of financial markets from one convenient
            trading environment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TradingCards;
