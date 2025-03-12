import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import InfoModal from "../../components/InfoModal";
import FormModal from "../../components/FormModal";
import Select from "react-select";
import emailjs from "@emailjs/browser";

import { getText } from "../../stringTranslations";

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
  const { language } = useContext(AppContext);

  const attendanceOptions = [
    { value: "Yes", label: getText("Yes", language) },
    { value: "No", label: getText("No", language) },
  ];

  const mainCourseOptions = [
    {
      value: "wild mushroom ravioli",
      label: getText("Wild Mushroom Ravioli (vegetarian)", language),
    },
    {
      value: "10oz filet mignon",
      label: getText("10oz Filet Mignon", language),
    },
    { value: "chilean sea bass", label: getText("Chilean Sea Bass", language) },
    {
      value: "jidori roasted chicken",
      label: getText("Jidori Roasted Chicken", language),
    },
  ];

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
    if (e.value === "Yes") {
      setShowMainCourseDropdown(true);
    } else {
      setShowMainCourseDropdown(false);
      setMainCourseOption("");
    }
    setAttendingDinner(e);
  };

  const tooltipMessage = () => {
    if (firstName === "") {
      return getText("First name is missing", language);
    } else if (lastName === "") {
      return getText("Last name is missing", language);
    }
    if (attendingCermony === "" && attendingDinner === "") {
      return getText("Ceremony and dinner attendance are missing", language);
    } else if (attendingCermony === "") {
      return getText("Ceremony attendance is missing", language);
    } else if (attendingDinner === "") {
      return getText("Dinner attendance is missing", language);
    } else if (showMainCourseDropdown && mainCourseOption === "") {
      return getText("Main course selection is missing", language);
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
    if (attendingCermony.value === "Yes" && attendingDinner.value === "Yes") {
      return (
        <>
          <div style={{ marginBottom: "5px" }}></div>
          <div style={{ marginBottom: "5px" }}>
            {getText("We'll see you at the ceremony and dinner!", language)}
          </div>
          <div>{getText("Thank you!", language)}</div>
        </>
      );
    } else if (attendingCermony.value === "Yes") {
      return (
        <>
          <div style={{ marginBottom: "5px" }}>
            {getText("RSVP received!", language)}
          </div>
          <div style={{ marginBottom: "5px" }}>
            {getText("We'll see you at the ceremony!", language)}
          </div>
          <div>{getText("Thank you!", language)}</div>
        </>
      );
    } else if (attendingDinner.value === "Yes") {
      return (
        <>
          <div style={{ marginBottom: "5px" }}>
            {getText("RSVP received!", language)}
          </div>
          <div style={{ marginBottom: "5px" }}>
            {getText("We'll see you at the dinner!", language)}
          </div>
          <div>{getText("Thank you!", language)}</div>
        </>
      );
    }
    return (
      <>
        <div style={{ marginBottom: "5px" }}>
          {getText("No worries!", language)}
        </div>
        <div style={{ marginBottom: "5px" }}>
          {getText(
            "Guess we'll have to see you some other time then!",
            language
          )}
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
          {getText("Something went wrong with the submission.", language)}
        </div>
        <div>
          {getText(
            "Please try again later or directly message either Yi-Nung or Raymond.",
            language
          )}
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
      <h2 className="modal-title-text">{getText("RSVP", language)}</h2>
      <div className="form-field">
        <div className="form-text">{getText("First Name", language)}</div>
        <div>
          <input
            type="text"
            placeholder={getText("First Name", language)}
            id="fname"
            name="fname"
            className="form-input"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </div>
      <div className="form-field">
        <div className="form-text">{getText("Last Name", language)}</div>
        <div>
          <input
            type="text"
            placeholder={getText("Last Name", language)}
            id="lname"
            name="lname"
            className="form-input"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="form-field">
        <div className="form-text">
          {getText("Will you be attending the ceremony?", language)}
        </div>
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              border: "solid 1px black",
              boxShadow: "none",
              "&:hover": {
                border: "solid 1px black !important",
              },
              fontFamily: "Caveat, 'LXGWWenKaiTC'",
            }),
            option: (baseStyles) => ({
              ...baseStyles,
              fontFamily: "Caveat, 'LXGWWenKaiTC'",
            }),
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              color: "black",
            }),
          }}
          placeholder={getText("Select option", language)}
          value={attendingCermony}
          onChange={setAttendingCeremony}
          options={attendanceOptions}
          menuPortalTarget={document.body}
        />
      </div>
      <div className="form-field">
        <div className="form-text">
          {getText("Will you be attending the dinner?", language)}
        </div>
        <Select
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              border: "solid 1px black",
              boxShadow: "none",
              "&:hover": {
                border: "solid 1px black !important",
              },
              fontFamily: "Caveat, 'LXGWWenKaiTC'",
            }),
            option: (baseStyles) => ({
              ...baseStyles,
              fontFamily: "Caveat, 'LXGWWenKaiTC'",
            }),
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              color: "black",
            }),
          }}
          placeholder={getText("Select option", language)}
          value={attendingDinner}
          onChange={(e) => handleDinnerAttendance(e)}
          options={attendanceOptions}
          menuPortalTarget={document.body}
        />
      </div>
      {showMainCourseDropdown && (
        <div className="form-field">
          <div className="form-text">
            {getText("Choose your main course", language)}
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
                fontFamily: "Caveat, 'LXGWWenKaiTC'",
              }),
              option: (baseStyles) => ({
                ...baseStyles,
                fontFamily: "Caveat, 'LXGWWenKaiTC'",
              }),
              dropdownIndicator: (baseStyles, state) => ({
                ...baseStyles,
                color: "black",
              }),
            }}
            placeholder={getText("Select option", language)}
            value={mainCourseOption}
            onChange={setMainCourseOption}
            options={mainCourseOptions}
            menuPortalTarget={document.body}
          />
        </div>
      )}
      <div className="form-field">
        <div className="form-text">
          {getText(
            "Additional private message to the hosts (optional)",
            language
          )}
        </div>
        <textarea
          className="form-text-area"
          name="additional-notes"
          rows="6"
          placeholder={getText("Enter your message", language)}
          onChange={(e) => setAdditionalMessage(e.target.value)}
        ></textarea>
      </div>
    </FormModal>
  );
}

export default RSVPModal;
