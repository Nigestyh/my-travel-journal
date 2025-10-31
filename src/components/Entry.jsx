import mapPin from "../assets/location-pin.png";
function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={props.img.src} alt={props.img.alt} className="main-image" />
      </div>
      <div>
        <div className="location-container">
          <img src={mapPin} alt="location-pin" className="location-pin" />
          <span className="country">{props.country}</span>
          <a href={props.googleMapLink} className="google-link" target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2>{props.title}</h2>
        <p className="trip-date">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
export default Entry;
