import "./css/NavBar.css";

function NavBar(props) {
  const { scheduleRef, dinnerRef, faqRef } = props;

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const isMobile = window.innerWidth < 500;

  return (
    <div className={"nav-container" + (isMobile ? " mobile" : "")}>
      <button
        className={"nav-item" + (isMobile ? " mobile" : "")}
        onClick={() => scrollToRef(scheduleRef)}
      >
        Schedule
      </button>
      <button
        className={"nav-item" + (isMobile ? " mobile" : "")}
        onClick={() => scrollToRef(dinnerRef)}
      >
        Dinner Menu
      </button>
      <button
        className={"nav-item" + (isMobile ? " mobile" : "")}
        onClick={() => scrollToRef(faqRef)}
      >
        FAQ
      </button>
    </div>
  );
}

export default NavBar;
