import "./Schedule.css";

import { useContext } from "react";
import AppContext from "../../AppContext";

import { getText } from "../../stringTranslations";

function Schedule(props) {
  const language = useContext(AppContext);
  const isMobile = window.innerWidth < 500;

  const textClassName =
    window.innerWidth < 500
      ? "schedule-content-text-mobile"
      : "schedule-content-text";

  return (
    <div ref={props.ref}>
      <h1 className={"subsection-header" + (isMobile ? " mobile" : "")}>
        {getText("Schedule", language)}
      </h1>
      <div className="schedule-content-container">
        <div className={textClassName}>
          5:15pm: {getText("Arrive at Pines Park", language)} (
          {getText("Address", language)}:{" "}
          <a
            className="map-link"
            target="_blank"
            rel="noreferrer"
            href="https://maps.app.goo.gl/gHsdY3z7cV5ySg7m7"
          >
            34941 Camino Capistrano, Capistrano Beach, CA 92624
          </a>
          )
        </div>
        <div className={textClassName}>
          5:30pm-5:45pm: {getText("Wedding Ceremony", language)}
        </div>
        <div className={textClassName}>
          5:45pm-6:30pm: {getText("Photos with Guests", language)}
        </div>
        <div className={textClassName}>
          6:30pm-7:15pm:{" "}
          {getText("Arrive at Whitestone Restaurant & Bar", language)} (
          {getText("Address", language)}:{" "}
          <a
            className="map-link"
            target="_blank"
            rel="noreferrer"
            href="https://maps.app.goo.gl/vghhqZPiD1JMBuDq8"
          >
            34212 Pacific Coast Hwy Unit A, Dana Point, CA 92629
          </a>
          )
        </div>
        <div className={textClassName}>
          7:15pm-8:30pm: {getText("Dinner and Drinks", language)}
        </div>
        <div className={textClassName}>
          8:30pm: {getText("Wedding Cake", language)}
        </div>
        <div className={textClassName}>
          9:00pm-10:00pm: {getText("Go Home", language)}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
