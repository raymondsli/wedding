import "./Details.css";
import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import RSVPModal from "./RSVPModal";
import CheckRSVPModal from "./CheckRSVPModal";

import { getText } from "../../stringTranslations";

/*
 * Top component containing wedding details and rsvp options.
 */
function Details() {
  const [showRSVPModal, setShowRSVPModal] = useState(false);
  const [showCheckRSVPModal, setShowCheckRSVPModal] = useState(false);
  const { isMobile, language } = useContext(AppContext);

  return (
    <div className={"details-container" + (isMobile ? " mobile" : "")}>
      <div className={"background-image" + (isMobile ? " mobile" : "")} />
      <div></div>
      <div className="couple-image" />
      {isMobile ? (
        <h1 className="name-header mobile">
          {getText("Yi-Nung", language)} <br /> & <br />{" "}
          {getText("Raymond", language)}
        </h1>
      ) : (
        <h1 className="name-header">
          {getText("Yi-Nung", language)} & {getText("Raymond", language)}
        </h1>
      )}
      <div className="details-content">
        <div
          className={
            "details-text-container details-text" + (isMobile ? " mobile" : "")
          }
        >
          {getText("6th September 2025 at Pines Park", language)}
        </div>
        <div
          className={
            "details-text-container details-text" + (isMobile ? " mobile" : "")
          }
        >
          <a
            className={"map-link" + (isMobile ? " mobile" : "")}
            target="_blank"
            rel="noreferrer"
            href="https://maps.app.goo.gl/gHsdY3z7cV5ySg7m7"
          >
            34941 Camino Capistrano, Capistrano Beach, CA 92624
          </a>
        </div>
      </div>
      {!isMobile && (
        <div className="countdown-clock">
          <FlipClockCountdown
            to={"2025-09-06T17:00:00"}
            labels={[
              getText("Days", language),
              getText("Hours", language),
              getText("Minutes", language),
              getText("Seconds", language),
            ]}
            labelStyle={{
              color: "rgb(13, 75, 133)",
              fontFamily: "Charm, 'LXGWWenKaiTC', Arial, serif",
            }}
            digitBlockStyle={{
              backgroundColor: "rgb(13, 75, 133)",
            }}
          />
        </div>
      )}
      <div className="rsvp-button-container">
        <button
          className={"rsvp-button" + (language === "Chinese" ? " chinese" : "")}
          onClick={() => setShowRSVPModal(true)}
        >
          {getText("RSVP", language)}
        </button>
      </div>
      <div className="rsvp-status-button-container">
        <button
          className={
            "rsvp-status-button" + (language === "Chinese" ? " chinese" : "")
          }
          onClick={() => setShowCheckRSVPModal(true)}
        >
          {getText("Check RSVP Status", language)}
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
