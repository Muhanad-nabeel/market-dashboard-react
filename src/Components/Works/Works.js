import "./Works.css";
import image from "../../assets/images/common-banner.png";

function Works() {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <div className="phone-description">
          <button>How It Works</button>

          <h2>How To Use MT5 Platform</h2>
        </div>

        <div className="phone-image">
          <img src={image} alt="MT5 Platform" />
        </div>
      </div>
    </section>
  );
}

export default Works;
