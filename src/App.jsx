import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import entryData from "./entryData";

function App() {
  const entryElement = entryData.map((entry) => {
    return (
      <Entry
        img={entry.img}
        country={entry.country}
        title={entry.title}
        googleMapLink={entry.googleMapLink}
        dates={entry.dates}
        text={entry.text}
      />
    );
  });
  return (
    <>
      <Header />
      {entryElement}
    </>
  );
}

export default App;
