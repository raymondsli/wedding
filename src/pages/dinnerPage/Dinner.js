import "./Dinner.css";

function Dinner(props) {
  return (
    <div className="dinner-page" ref={props.ref}>
      <h1 className="subsection-header">Dinner Menu</h1>
      <div className="dinner-menu-image" />
    </div>
  );
}

export default Dinner;
