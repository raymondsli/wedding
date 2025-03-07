import "./componentsCss/SourceCodeButton.css";

function SourceCodeButton() {
  return (
    <a target="_blank" href="https://github.com/raymondsli/wedding">
      <button
        as="a"
        href="https://github.com/raymondsli/wedding"
        className="source-code-button"
        //onClick="window.location.href='https://github.com/raymondsli/wedding'"
      >
        Source Code
      </button>
    </a>
  );
}

export default SourceCodeButton;
