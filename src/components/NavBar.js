import "./NavBar.css";

function NavBar(props) {
  const { navItems } = props;
  return (
    <div className="nav-container">
      <button className="nav-item">Test</button>
      <button className="nav-item">Second</button>
      <button className="nav-item">Third</button>
    </div>
  );
}

export default NavBar;
