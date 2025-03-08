import "./css/NavBar.css";

function NavBar(props) {
  const { scheduleRef, dinnerRef, faqRef } = props;

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const navItemStyle = window.innerWidth < 500 ? { color: "black" } : {};

  return (
    <div className="nav-container">
      <button
        className="nav-item"
        onClick={() => scrollToRef(scheduleRef)}
        style={navItemStyle}
      >
        Schedule
      </button>
      <button
        className="nav-item"
        onClick={() => scrollToRef(dinnerRef)}
        style={navItemStyle}
      >
        Dinner Menu
      </button>
      <button
        className="nav-item"
        onClick={() => scrollToRef(faqRef)}
        style={navItemStyle}
      >
        FAQ
      </button>
    </div>
  );
}

export default NavBar;
