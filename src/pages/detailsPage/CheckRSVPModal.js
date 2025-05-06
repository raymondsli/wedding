import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import InfoModal from "../../components/InfoModal";
import FormModal from "../../components/FormModal";

import { rsvpData } from "./RSVPData";
import { getText } from "../../stringTranslations";

/*
 * Modal to show RSVP status and dinner selection.
 */
function CheckRSVPModal(props) {
  const { closeModal } = props;
  const [name, setName] = useState("");
  const [showInfoModal, setShowInfoModal] = useState(false);
  const { language } = useContext(AppContext);

  const handleClose = () => {
    setName("");
    closeModal();
  };

  const tooltipMessage = () => {
    if (name === "") {
      return getText("Name is missing", language);
    }
    return null;
  };

  const statusMessage = () => {
    if (!rsvpData.hasOwnProperty(name.toLowerCase())) {
      return (
        <>
          <div style={{ marginBottom: "5px" }}>
            {getText("No RSVP status found for", language)} {name}{" "}
            {getText("!", language)}
          </div>{" "}
          <div style={{ marginBottom: "5px", textAlign: "center" }}>
            {getText(
              "Please note RSVP status submissions may take a few hours to be reflected.",
              language
            )}
          </div>
        </>
      );
    }
    const rsvpStatus = rsvpData[name.toLowerCase()];
    return (
      <>
        <div style={{ marginBottom: "5px" }}>{name}</div>
        <div style={{ marginBottom: "5px" }}>
          {getText("Attending Ceremony", language)}:
          {" " + getText(rsvpStatus[0], language)}
        </div>
        <div style={{ marginBottom: "5px" }}>
          {getText("Attending Dinner", language)}:
          {" " + getText(rsvpStatus[1], language)}
        </div>
        <div style={{ marginBottom: "5px" }}>
          {getText("Main Course Selection", language)}:
          {" " + getText(rsvpStatus[2], language)}
        </div>
      </>
    );
  };

  if (showInfoModal) {
    return <InfoModal onClose={handleClose}>{statusMessage()}</InfoModal>;
  }

  return (
    <FormModal
      onClose={handleClose}
      onSubmit={() => setShowInfoModal(true)}
      submitTooltip={tooltipMessage()}
      isSubmitDisabled={name === ""}
    >
      <h2 className="modal-title-text">
        {getText("Check RSVP Status", language)}
      </h2>
      <div
        className={
          "modal-description" + (language === "Chinese" ? " chinese" : "")
        }
      >
        {getText("Check your RSVP status and main course selection.", language)}
        <br />{" "}
        {getText(
          "Note: Status changes may take a few hours to be reflected.",
          language
        )}
      </div>
      <div className="form-field">
        <div className="form-text">{getText("Name", language)}</div>
        <div>
          <input
            type="text"
            placeholder={getText("Name", language)}
            name="name"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </FormModal>
  );
}

export default CheckRSVPModal;
