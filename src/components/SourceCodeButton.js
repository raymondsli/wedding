import "./css/SourceCodeButton.css";

function SourceCodeButton() {
  return (
    <a
      className="source-code-link-wrapper"
      target="_blank"
      href="https://github.com/raymondsli/wedding"
    >
      <button className="source-code-button">Source Code</button>
    </a>
  );
}

export default SourceCodeButton;
