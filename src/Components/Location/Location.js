import "./Location.css";

function Location() {
  return (
    <section className="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6766.363483666203!2d35.95305582370549!3d32.010190332166786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sjo!4v1765645375127!5m2!1sar!2sjo"
        title="MyMarket Location"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Location;
