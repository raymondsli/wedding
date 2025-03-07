import "./Details.css";
import RSVPModal from "./RSVPModal";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useRef, useState } from "react";

function Details() {
  const [showRSVPModal, setShowRSVPModal] = useState(false);
  const [containerRef, setContainerRef] = useState(null);

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
      {showRSVPModal && (
        <RSVPModal closeModal={() => setShowRSVPModal(false)} />
      )}
    </div>
  );
}

export default Details;
