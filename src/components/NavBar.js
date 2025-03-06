import "./NavBar.css";

function NavBar(props) {
  const { navItems } = props;
  return (
    <div className="nav-container">
      <button className="nav-item">Schedule</button>
      <button className="nav-item">Dinner</button>
      <button className="nav-item">FAQ</button>
    </div>
  );
}

export default NavBar;
