import "./componentsCss/FormButton.css";

function FormButton(props) {
  const { text, onClick, isDisabled, toolTip, isActive } = props;
  return (
    <button
      disabled={isDisabled}
      title={toolTip}
      onClick={onClick}
      className={`form-button ${isActive ? "form-button-active" : ""}`}
    >
      {text}
    </button>
  );
}

export default FormButton;
