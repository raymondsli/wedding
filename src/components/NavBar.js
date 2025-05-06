import "./css/NavBar.css";

import { useContext } from "react";
import AppContext from "../AppContext";

import { getText } from "../stringTranslations";

/*
 * Top navbar component containing language toggle and quick scroll buttons.
 */
function NavBar(props) {
  const { scheduleRef, dinnerRef, faqRef } = props;
  const { isMobile, language, setLanguage } = useContext(AppContext);

  const toggleLanguage = () => {
    if (language == "English") {
      setLanguage("Chinese");
    } else {
      setLanguage("English");
    }
  };

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={"nav-container" + (isMobile ? " mobile" : "")}>
      {isMobile && (
        <button
          className={"language-toggle" + (isMobile ? " mobile" : "")}
          onClick={toggleLanguage}
        >
          {language === "English"
            ? "中文版"
            : isMobile
            ? "Switch to English Version"
            : "English Version"}
        </button>
      )}
      <div className={"nav-scroll-container" + (isMobile ? " mobile" : "")}>
        {!isMobile && (
          <button
            className={"language-toggle" + (isMobile ? " mobile" : "")}
            onClick={toggleLanguage}
          >
            {language === "English" ? "中文版" : "English Version"}
          </button>
        )}
        <button
          className={"nav-item" + (isMobile ? " mobile" : "")}
          onClick={() => scrollToRef(scheduleRef)}
        >
          {getText("Schedule", language)}
        </button>
        <button
          className={"nav-item" + (isMobile ? " mobile" : "")}
          onClick={() => scrollToRef(dinnerRef)}
        >
          {getText("Dinner Menu", language)}
        </button>
        <button
          className={"nav-item" + (isMobile ? " mobile" : "")}
          onClick={() => scrollToRef(faqRef)}
        >
          {getText("FAQ", language)}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
