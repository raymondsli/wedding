import "./css/NavBar.css";

import { useContext } from "react";
import AppContext from "../AppContext";

import { getText } from "../stringTranslations";

function NavBar(props) {
  const { scheduleRef, dinnerRef, faqRef } = props;
  const { language, setLanguage } = useContext(AppContext);

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

  const isMobile = window.innerWidth < 500;

  return (
    <div className={"nav-container" + (isMobile ? " mobile" : "")}>
      {isMobile && (
        <button
          className={"language-toggle" + (isMobile ? " mobile" : "")}
          onClick={toggleLanguage}
        >
          {language === "English" ? "中文版" : "English Version"}
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
