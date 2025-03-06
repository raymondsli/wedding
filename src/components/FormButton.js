import "./FormButton.css";

const formButtonStyle = {
  margin: "10px",
  borderRadius: "4px",
  padding: "10px",
  background: "#fff",
  fontSize: "16px",
  fontFamily: "PTSerif, Sans, Condensed",
  fontWeight: "600",
  cursor: "pointer",
  border: "solid 1px gray",
};

const submitExtraStyles = {};

function FormButton(props) {
  const { text, onClick, isDisabled, toolTip } = props;
  return (
    <button
      disabled={isDisabled}
      title={toolTip}
      onClick={onClick}
      className="form-button"
    >
      {text}
    </button>
  );
}

export default FormButton;
