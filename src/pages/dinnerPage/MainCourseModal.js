import { useState } from "react";
import FormModal from "../../components/FormModal";
import InfoModal from "../../components/InfoModal";
import FormButton from "../../components/FormButton";
import Select from "react-select";
import emailjs from "@emailjs/browser";

const mainCourseOptions = [
  {
    value: "wild mushroom ravioli",
    label: "Wild Mushroom Ravioli (vegetarian)",
  },
  { value: "10oz filet mignon", label: "10oz Filet Mignon" },
  { value: "chilean sea bass", label: "Chilean Sea Bass" },
  { value: "jidori roasted chicken", label: "Jidori Roasted Chicken" },
];

function MainCourseButtonAndModal(props) {
  const { closeModal } = props;
  const [isConfirmationClicked, setIsConfirmationClicked] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [name, setName] = useState("");
  const [mainCourseOption, setMainCourseOption] = useState("");

  const handleClose = () => {
    setIsConfirmationClicked(false);
    setShowSuccessModal(false);
    setShowFailModal(false);
    setName("");
    setMainCourseOption("");
    closeModal();
  };

  const toolTipMessage = () => {
    if (name == "" && mainCourseOption == "") {
      return "Name and main course selection are missing";
    } else if (name == "") {
      return "Name is missing";
    } else if (mainCourseOption == "") {
      return "Main course selection is missing";
    }
    return null;
  };

  const submitMainCourseForm = () => {
    setIsConfirmationClicked(true);
    emailjs
      .send(
        "service_tubf9o9",
        "template_q8zrmkf",
        {
          name,
          message: `Main Course Selection: ${mainCourseOption.label}`,
        },
        {
          publicKey: "4-TX7d682kI7opsP_",
        }
      )
      .then(
        () => {
          setShowSuccessModal(true);
        },
        () => {
          setShowFailModal(true);
        }
      );
  };

  if (showSuccessModal) {
    return (
      <InfoModal onClose={handleClose}>
        <div style={{ marginBottom: "5px" }}>
          Main course selection received!
        </div>
        <div>Thank you!</div>
      </InfoModal>
    );
  } else if (showFailModal) {
    return (
      <InfoModal onClose={handleClose}>
        <div style={{ marginBottom: "5px" }}>
          Something went wrong with the submission.
        </div>
        <div>
          Please try again later or directly message either Yi-Nung or Raymond.
        </div>
      </InfoModal>
    );
  }

  return (
    <FormModal onClose={handleClose}>
      <h2 className="modal-title-text">Choose Main Course</h2>
      <form>
        <div className="form-field">
          <div className="form-text">
            <label for="fname">Name</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Name"
              id="fname"
              name="fname"
              className="form-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-field">
          <div className="form-text">
            <label for="main-course">Choose your main course</label>
          </div>
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                border: "solid 1px black",
                boxShadow: "none",
                "&:hover": {
                  border: "solid 1px black !important",
                },
              }),
              dropdownIndicator: (baseStyles, state) => ({
                ...baseStyles,
                color: "black",
              }),
            }}
            placeholder="Select option"
            value={mainCourseOption}
            onChange={setMainCourseOption}
            options={mainCourseOptions}
            menuPortalTarget={document.body}
          />
        </div>
      </form>
      <div className="form-buttons-container">
        <FormButton text="Close" onClick={handleClose} isDisabled={false} />
        <FormButton
          text="Submit"
          onClick={submitMainCourseForm}
          toolTip={toolTipMessage()}
          isDisabled={
            name == "" || mainCourseOption == "" || isConfirmationClicked
          }
          isActive={isConfirmationClicked}
        />
      </div>
    </FormModal>
  );
}

export default MainCourseButtonAndModal;
