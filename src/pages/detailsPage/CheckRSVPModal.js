import { useState } from "react";
import { rsvpData } from "./RSVPData";
import InfoModal from "../../components/InfoModal";
import FormModal from "../../components/FormModal";

function CheckRSVPModal(props) {
  const { closeModal } = props;
  const [name, setName] = useState("");
  const [showInfoModal, setShowInfoModal] = useState(false);

  const handleClose = () => {
    setName("");
    closeModal();
  };

  const tooltipMessage = () => {
    if (name === "") {
      return "Name is missing";
    }
    return null;
  };

  const statusMessage = () => {
    if (!rsvpData.hasOwnProperty(name.toLowerCase())) {
      return (
        <>
          <div style={{ marginBottom: "5px" }}>
            No RSVP status found for {name}!
          </div>{" "}
          <div style={{ marginBottom: "5px", textAlign: "center" }}>
            Please note RSVP status submissions may take a few hours to be
            reflected.
          </div>
        </>
      );
    }
    const rsvpStatus = rsvpData[name.toLowerCase()];
    return (
      <>
        <div style={{ marginBottom: "5px" }}>{name}</div>
        <div style={{ marginBottom: "5px" }}>
          Attending Ceremony: {rsvpStatus[0]}
        </div>
        <div style={{ marginBottom: "5px" }}>
          Attending Dinner: {rsvpStatus[1]}
        </div>
        <div style={{ marginBottom: "5px" }}>
          Main Course Selection: {rsvpStatus[2]}
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
      <h2 className="modal-title-text">Check RSVP Status</h2>
      <div className="modal-description">
        Check your RSVP status and main course selection.
        <br /> Note: Status changes may take a few hours to be reflected.
      </div>
      <div className="form-field">
        <div className="form-text">Name</div>
        <div>
          <input
            type="text"
            placeholder="Name"
            id="name"
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
