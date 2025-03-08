import { useState } from "react";
import InfoModal from "../../components/InfoModal";
import FormModal from "../../components/FormModal";
import Select from "react-select";
import emailjs from "@emailjs/browser";

const attendanceOptions = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

const mainCourseOptions = [
  {
    value: "wild mushroom ravioli",
    label: "Wild Mushroom Ravioli (vegetarian)",
  },
  { value: "10oz filet mignon", label: "10oz Filet Mignon" },
  { value: "chilean sea bass", label: "Chilean Sea Bass" },
  { value: "jidori roasted chicken", label: "Jidori Roasted Chicken" },
];

function RSVPModal(props) {
  const { closeModal } = props;
  const [isConfirmationClicked, setIsConfirmationClicked] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [attendingCermony, setAttendingCeremony] = useState("");
  const [attendingDinner, setAttendingDinner] = useState("");
  const [showMainCourseDropdown, setShowMainCourseDropdown] = useState(false);
  const [mainCourseOption, setMainCourseOption] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState("");

  const handleClose = () => {
    setIsConfirmationClicked(false);
    setShowSuccessModal(false);
    setShowFailModal(false);
    setFirstName("");
    setLastName("");
    setAttendingCeremony("");
    setAttendingDinner("");
    setShowMainCourseDropdown(false);
    setMainCourseOption("");
    closeModal();
  };

  const handleDinnerAttendance = (e) => {
    if (e.label === "Yes") {
      setShowMainCourseDropdown(true);
    } else {
      setShowMainCourseDropdown(false);
      setMainCourseOption("");
    }
    setAttendingDinner(e);
  };

  const tooltipMessage = () => {
    if (firstName === "") {
      return "First name is missing";
    } else if (lastName === "") {
      return "Last name is missing";
    }
    if (attendingCermony === "" && attendingDinner === "") {
      return "Ceremony and dinner attendance is missing";
    } else if (attendingCermony === "") {
      return "Ceremony attendance is missing";
    } else if (attendingDinner === "") {
      return "Dinner attendance is missing";
    } else if (showMainCourseDropdown && mainCourseOption === "") {
      return "Main course selection is missing";
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
          name: `${firstName} ${lastName}`,
          message: `Attending Ceremony: ${attendingCermony.label}. 
            Attending Dinner: ${attendingDinner.label}. 
            Main course selection: ${mainCourseOption.label}. 
            Additional message: ${additionalMessage}`,
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
    if (attendingCermony.label === "Yes" && attendingDinner.label === "Yes") {
      return (
        <>
          <div style={{ marginBottom: "5px" }}>RSVP received!</div>
          <div style={{ marginBottom: "5px" }}>
            We'll see you at the ceremony and dinner!
          </div>
          <div>Thank you!</div>
        </>
      );
    } else if (attendingCermony.label === "Yes") {
      return (
        <>
          <div style={{ marginBottom: "5px" }}>RSVP received!</div>
          <div style={{ marginBottom: "5px" }}>
            We'll see you at the ceremony!
          </div>
          <div>Thank you!</div>
        </>
      );
    } else if (attendingDinner.label === "Yes") {
      return (
        <>
          <div style={{ marginBottom: "5px" }}>RSVP received!</div>
          <div style={{ marginBottom: "5px" }}>
            We'll see you at the dinner!
          </div>
          <div>Thank you!</div>
        </>
      );
    }
    return (
      <>
        <div style={{ marginBottom: "5px" }}>No worries!</div>
        <div style={{ marginBottom: "5px" }}>
          Guess we'll have to see you some other time then!
        </div>
      </>
    );
  };

  if (showSuccessModal) {
    return <InfoModal onClose={handleClose}>{confirmationMessage()}</InfoModal>;
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
    <FormModal
      onClose={handleClose}
      onSubmit={submitRSVPForm}
      submitTooltip={tooltipMessage()}
      isSubmitDisabled={
        firstName === "" ||
        lastName === "" ||
        attendingCermony === "" ||
        attendingDinner === "" ||
        (showMainCourseDropdown && mainCourseOption === "") ||
        isConfirmationClicked
      }
      isSubmitActive={isConfirmationClicked}
    >
      <h2 className="modal-title-text">RSVP</h2>
      <div className="form-field">
        <div className="form-text">First Name</div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            id="fname"
            name="fname"
            className="form-input"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>
      <div className="form-field">
        <div className="form-text">Last Name</div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            id="lname"
            name="lname"
            className="form-input"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="form-field">
        <div className="form-text">Will you be attending the ceremony?</div>
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              border: "solid 1px black",
              boxShadow: "none",
              "&:hover": {
                border: "solid 1px black !important",
              },
            }),
            dropdownIndicator: (baseStyles) => ({
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
        <div className="form-text">Will you be attending the dinner?</div>
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              border: "solid 1px black",
              boxShadow: "none",
              "&:hover": {
                border: "solid 1px black !important",
              },
            }),
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              color: "black",
            }),
          }}
          placeholder="Select option"
          value={attendingDinner}
          onChange={(e) => handleDinnerAttendance(e)}
          options={attendanceOptions}
          menuPortalTarget={document.body}
        />
      </div>
      {showMainCourseDropdown && (
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
      )}
      <div className="form-field">
        <div className="form-text">
          Additional private message to the hosts (optional)
        </div>
        <textarea
          className="form-text-area"
          name="additional-notes"
          rows="6"
          placeholder="Enter your message"
          onChange={(e) => setAdditionalMessage(e.target.value)}
        ></textarea>
      </div>
    </FormModal>
  );
}

export default RSVPModal;
