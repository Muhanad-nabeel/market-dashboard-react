import "./Hero.css";
import image from "../../assets/images/deepintegrationwebscreen.png";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-main">
        <div className="hero-description">
          <img src={image} alt="MyMarket platform" />
        </div>

        <div className="hero-invest">
          <h1>Invest in Indices</h1>

          <div className="lottie-file">
            <dotlottie-player
              src="https://lottie.host/c50db0dd-b692-48e2-ba6a-a22b3cbf54c9/9LuYbOf8TM.lottie"
              background="transparent"
              speed="1"
              loop={true}
              autoplay={true}
              style={{
                width: "300px",
                height: "300px",
              }}
            ></dotlottie-player>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
