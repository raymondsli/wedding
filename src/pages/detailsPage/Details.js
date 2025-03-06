import "./Details.css";
import DetailsContent from "./DetailsContent";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

function Details() {
  return (
    <div className="background-image">
      <h1 className="name-header">Yi-Nung & Raymond</h1>
      <DetailsContent />
      <div className="countdown-clock">
        <FlipClockCountdown
          to={"2025-09-06T17:00:00"}
          digitBlockStyle={{ backgroundColor: "rgb(13, 75, 133)" }}
        />
      </div>
      <button className="rsvp-button">RSVP</button>
    </div>
  );
}

export default Details;
