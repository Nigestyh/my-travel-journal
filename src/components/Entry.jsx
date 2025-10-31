function Entry() {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src="src/assets/fasil-ghebbi.jpg" className="main-image" />
      </div>
      <div>
        <div className="location-container">
          <img src="src/assets/location-pin.png" className="location-pin" />
          <span className="country">Ethiopia</span>
          <a
            href="https://maps.app.goo.gl/PHRxDuUiD7N9243q6"
            className="google-link"
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>
        <h2>Fasil Ghebbi</h2>
        <p className="trip-date">16 Apr, 2023 - 09 May, 2023</p>
        <p className="entry-text">
          The Fasil Ghebbi is a fortress located in Gondar, Amhara Region,
          Ethiopia. It was founded in the 17th century by Emperor Fasilides and
          was the home of Ethiopian emperors. Its unique architecture shows
          diverse influences including Portuguese, Hindu, and Arab
          characteristics
        </p>
      </div>
    </article>
  );
}
export default Entry;
