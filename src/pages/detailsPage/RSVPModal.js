import { useState } from "react";
import InfoModal from "../../components/InfoModal";
import FormModal from "../../components/FormModal";
import FormButton from "../../components/FormButton";
import Select from "react-select";
import emailjs from "@emailjs/browser";

const attendanceOptions = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
  { value: "Unsure", label: "Unsure" },
];

function RSVPModal(props) {
  const { closeModal } = props;
  const [isConfirmationClicked, setIsConfirmationClicked] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [name, setName] = useState("");
  const [attendingCermony, setAttendingCeremony] = useState("");
  const [attendingDinner, setAttendingDinner] = useState("");

  const handleClose = () => {
    setIsConfirmationClicked(false);
    setShowSuccessModal(false);
    setShowFailModal(false);
    setName("");
    setAttendingCeremony("");
    setAttendingDinner("");
    closeModal();
  };

  const toolTipMessage = () => {
    if (name == "") {
      return "Name is missing";
    }
    if (attendingCermony == "" && attendingDinner == "") {
      return "Ceremony and dinner attendance is missing";
    } else if (attendingCermony == "") {
      return "Ceremony attendance is missing";
    } else if (attendingDinner == "") {
      return "Dinner attendance is missing";
    }
    return null;
  };

  const submitRSVPForm = () => {
    setIsConfirmationClicked(true);
    emailjs
      .send(
        "service_tubf9o9",
        "template_q8zrmkf",
        {
          name,
          message: `Attending Ceremony: ${attendingCermony.label}. Attending Dinner: ${attendingDinner.label}.`,
        },
        {
          publicKey: "4-TX7d682kI7opsP_",
        }
      )
      .then(
        () => {
          setShowSuccessModal(true);
        },
        (error) => {
          setShowFailModal(true);
        }
      );
  };

  const confirmationMessage = () => {
    if (attendingCermony.label == "Yes" && attendingDinner.label == "Yes") {
      return (
        <>
          <div style={{ marginBottom: "5px" }}>RSVP received!</div>
          <div style={{ marginBottom: "5px" }}>
            We'll see you at the ceremony and dinner!
          </div>
          <div>Thank you!</div>
        </>
      );
    } else if (attendingCermony.label == "Yes") {
      return (
        <>
          <div style={{ marginBottom: "5px" }}>RSVP received!</div>
          <div style={{ marginBottom: "5px" }}>
            We'll see you at the ceremony!
          </div>
          <div>Thank you!</div>
        </>
      );
    } else if (attendingDinner.label == "Yes") {
      return (
        <>
          <div style={{ marginBottom: "5px" }}>RSVP received!</div>
          <div style={{ marginBottom: "5px" }}>
            We'll see you at the dinner!
          </div>
          <div>Thank you!</div>
        </>
      );
    } else if (
      attendingCermony.label == "No" &&
      attendingDinner.label == "No"
    ) {
      return (
        <>
          <div style={{ marginBottom: "5px" }}>No worries!</div>
          <div style={{ marginBottom: "5px" }}>
            Guess we'll have to see you some other time then!
          </div>
        </>
      );
    }
    return (
      <>
        <div style={{ marginBottom: "5px" }}>RSVP Received!</div>
        <div style={{ marginBottom: "5px" }}>We hope to see you there!</div>
      </>
    );
  };

  if (showSuccessModal) {
    return <InfoModal onClose={handleClose}>{confirmationMessage()}</InfoModal>;
  } else if (showFailModal) {
    return (
      <InfoModal onClose={handleClose}>
        <div>Something went wrong with the submission.</div>
        <div>
          Please try again later or directly message either Yi-Nung or Raymond.
        </div>
      </InfoModal>
    );
  }

  return (
    <FormModal onClose={handleClose}>
      <h2 className="modal-title-text">RSVP</h2>
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
            <label for="main-course">Will you be attending the ceremony?</label>
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
            value={attendingCermony}
            onChange={setAttendingCeremony}
            options={attendanceOptions}
            menuPortalTarget={document.body}
          />
        </div>
        <div className="form-field">
          <div className="form-text">
            <label for="main-course">Will you be attending the dinner?</label>
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
            value={attendingDinner}
            onChange={setAttendingDinner}
            options={attendanceOptions}
            menuPortalTarget={document.body}
          />
        </div>
      </form>
      <div className="form-buttons-container">
        <FormButton text="Close" onClick={handleClose} isDisabled={false} />
        <FormButton
          text="Submit"
          onClick={submitRSVPForm}
          toolTip={toolTipMessage()}
          isDisabled={
            name == "" ||
            attendingCermony == "" ||
            attendingDinner == "" ||
            isConfirmationClicked
          }
          isActive={isConfirmationClicked}
        />
      </div>
    </FormModal>
  );
}

export default RSVPModal;
