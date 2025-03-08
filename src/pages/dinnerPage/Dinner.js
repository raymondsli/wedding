import "./Dinner.css";

import { useContext } from "react";
import AppContext from "../../AppContext";

import { getText } from "../../stringTranslations";

function Dinner(props) {
  const language = useContext(AppContext);
  const isMobile = window.innerWidth < 500;

  return (
    <div className="dinner-page" ref={props.ref}>
      <h1 className={"subsection-header" + (isMobile ? " mobile" : "")}>
        {isMobile
          ? getText("Dinner", language)
          : getText("Dinner Menu", language)}
      </h1>
      <div className={"dinner-menu-image" + (isMobile ? " mobile" : "")} />
    </div>
  );
}

export default Dinner;
