import globe from "../assets/globe.svg";
function Header() {
  return (
    <header>
      <h1>my travel journal</h1>
      <img className="globe" src={globe} />
    </header>
  );
}
export default Header;
