import { useState } from "react";
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
  const [name, setName] = useState("");
  const [attendingCermony, setAttendingCeremony] = useState("");
  const [attendingDinner, setAttendingDinner] = useState("");

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
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    closeModal();
  };

  return (
    <FormModal onClose={closeModal}>
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
        <FormButton text="Close" onClick={closeModal} isDisabled={false} />
        <FormButton
          text="Submit"
          onClick={submitRSVPForm}
          toolTip={toolTipMessage()}
          isDisabled={
            name == "" || attendingCermony == "" || attendingDinner == ""
          }
        />
      </div>
    </FormModal>
  );
}

export default RSVPModal;
