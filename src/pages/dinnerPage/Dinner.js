import "./Dinner.css";

function Dinner(props) {
  const isMobile = window.innerWidth < 500;

  return (
    <div className="dinner-page" ref={props.ref}>
      <h1 className={"subsection-header" + (isMobile ? " mobile" : "")}>
        {isMobile ? "Dinner" : "Dinner Menu"}
      </h1>
      <div className={"dinner-menu-image" + (isMobile ? " mobile" : "")} />
    </div>
  );
}

export default Dinner;
