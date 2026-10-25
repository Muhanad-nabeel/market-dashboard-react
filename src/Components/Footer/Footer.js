import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#contact">
            Contact Us
            <i className="fa-solid fa-phone-flip"></i>
          </a>

          <a href="#location">
            Our Location
            <i className="fa-solid fa-location-pin"></i>
          </a>

          <a href="#visit">
            Visit Us
            <i className="fa-solid fa-eye"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
