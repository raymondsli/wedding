import "./Details.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import RSVPModal from "./RSVPModal";
import CheckRSVPModal from "./CheckRSVPModal";
import { useState } from "react";

function Details() {
  const [containerRef, setContainerRef] = useState(null);
  const [showRSVPModal, setShowRSVPModal] = useState(false);
  const [showCheckRSVPModal, setShowCheckRSVPModal] = useState(false);

  return (
    <div
      className="details-container"
      ref={(newRef) => setContainerRef(newRef)}
    >
      <div className="background-image" />
      <h1 className="name-header">Yi-Nung & Raymond</h1>
      <div className="details-content">
        <div className="details-text-container details-text">
          6th September 2025 at Pines Park
        </div>
        <div className="details-text-container details-text">
          34941 Camino Capistrano, Capistrano Beach, CA 92624
        </div>
      </div>
      {containerRef != null && containerRef.offsetWidth >= 500 && (
        <div className="countdown-clock">
          <FlipClockCountdown
            to={"2025-09-06T17:00:00"}
            digitBlockStyle={{
              backgroundColor: "rgb(13, 75, 133)",
            }}
          />
        </div>
      )}
      <div className="rsvp-button-container">
        <button className="rsvp-button" onClick={() => setShowRSVPModal(true)}>
          RSVP
        </button>
      </div>
      <div className="rsvp-status-button-container">
        <button
          className="rsvp-status-button"
          onClick={() => setShowCheckRSVPModal(true)}
        >
          Check RSVP Status
        </button>
      </div>
      {showRSVPModal && (
        <RSVPModal closeModal={() => setShowRSVPModal(false)} />
      )}
      {showCheckRSVPModal && (
        <CheckRSVPModal closeModal={() => setShowCheckRSVPModal(false)} />
      )}
    </div>
  );
}

export default Details;
