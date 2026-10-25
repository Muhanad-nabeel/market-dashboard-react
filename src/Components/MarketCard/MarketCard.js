import "./MarketCard.css";

function MarketCard({ market }) {
  return (
    <section className="market-card">
      <div className="market-card-header">
        <div>
          <h3>{market.symbol}</h3>
          <p>{market.name}</p>
        </div>

        <span className="market-icon">
          <i className="fa-solid fa-chart-line"></i>
        </span>
      </div>

      <div className="market-card-price">
        <span>{market.price}</span>

        <span
          className={
            market.change >= 0
              ? "market-change positive"
              : "market-change negative"
          }
        >
          {market.change >= 0 ? "+" : ""}
          {market.change}%
        </span>
      </div>
    </section>
  );
}

export default MarketCard;
