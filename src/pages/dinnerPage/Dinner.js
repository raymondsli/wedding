import "./Dinner.css";

import { useContext } from "react";
import AppContext from "../../AppContext";

import { getText } from "../../stringTranslations";

function Dinner(props) {
  const { isMobile, language } = useContext(AppContext);

  return (
    <div className="dinner-page" ref={props.ref}>
      <h1 className={"subsection-header" + (isMobile ? " mobile" : "")}>
        {isMobile
          ? getText("Dinner", language)
          : getText("Dinner Menu", language)}
      </h1>
      <div
        className={
          "dinner-menu-image" +
          (language === "Chinese" ? " chinese" : "") +
          (isMobile ? " mobile" : "")
        }
      />
    </div>
  );
}

export default Dinner;
