import "./css/SourceCodeButton.css";
import { useContext } from "react";
import AppContext from "../AppContext";

import { getText } from "../stringTranslations";

function SourceCodeButton() {
  const language = useContext(AppContext);
  return (
    <a
      className="source-code-link-wrapper"
      target="_blank"
      rel="noreferrer"
      href="https://github.com/raymondsli/wedding"
    >
      <button className="source-code-button">
        {getText("Source Code", language)}
      </button>
    </a>
  );
}

export default SourceCodeButton;
