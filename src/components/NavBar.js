import "./NavBar.css";

function NavBar(props) {
  const { scheduleRef, dinnerRef, faqRef } = props;

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav-container">
      <button className="nav-item" onClick={() => scrollToRef(scheduleRef)}>
        Schedule
      </button>
      <button className="nav-item" onClick={() => scrollToRef(dinnerRef)}>
        Dinner Menu
      </button>
      <button className="nav-item" onClick={() => scrollToRef(faqRef)}>
        FAQ
      </button>
    </div>
  );
}

export default NavBar;
