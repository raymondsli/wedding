import "./Dinner.css";

import { useContext } from "react";
import AppContext from "../../AppContext";

import { getText } from "../../stringTranslations";

/*
 * Component containing dinner menu image.
 */
function Dinner(props) {
  const { isMobile, language } = useContext(AppContext);

  return (
    <div className="dinner-page" ref={props.ref}>
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
        href="https://whitestonerestaurant.com/dana-point-lantern-district-whitestone-restaurant-and-bar-food-menu"
      >
        <h1 className={"subsection-header" + (isMobile ? " mobile" : "")}>
          {isMobile
            ? getText("Dinner", language)
            : getText("Dinner Menu", language)}
        </h1>
      </a>
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
