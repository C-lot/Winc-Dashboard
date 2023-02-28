import WincLogo from "../logo_winc.jpeg";

function Header() {
  return (
    <div className="header">
      <a href="https://www.wincacademy.com" alt="WincLogo">
        <img className="logoWinc" src={WincLogo} alt="winclogo" />
      </a>
      <div className="description">
        <h2>Student Dashboard </h2>
      </div>
    </div>
  );
}

export default Header;
