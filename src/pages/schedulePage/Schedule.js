import "./Schedule.css";

import { useContext } from "react";
import AppContext from "../../AppContext";

import { getText } from "../../stringTranslations";

/*
 * Component for showing wedding schedule.
 */
function Schedule(props) {
  const { isMobile, language } = useContext(AppContext);

  return (
    <div ref={props.ref}>
      <h1 className={"subsection-header" + (isMobile ? " mobile" : "")}>
        {getText("Schedule", language)}
      </h1>
      <div className="schedule-content-container">
        <div className={"schedule-content-text" + (isMobile ? " mobile" : "")}>
          5:00pm: {getText("Arrive at Pines Park", language)} (
          {getText("Address", language)}:{" "}
          <a
            className={"map-link" + (isMobile ? " mobile" : "")}
            target="_blank"
            rel="noreferrer"
            href="https://maps.app.goo.gl/gHsdY3z7cV5ySg7m7"
          >
            34941 Camino Capistrano, Capistrano Beach, CA 92624
          </a>
          )
        </div>
        <div className={"schedule-content-text" + (isMobile ? " mobile" : "")}>
          5:30pm-6:00pm: {getText("Wedding Ceremony", language)}
        </div>
        <div className={"schedule-content-text" + (isMobile ? " mobile" : "")}>
          6:00pm-6:20pm: {getText("Photos with Guests", language)}
        </div>
        <div className={"schedule-content-text" + (isMobile ? " mobile" : "")}>
          6:20pm-7:15pm:{" "}
          {getText("Arrive at Whitestone Restaurant & Bar", language)} (
          {getText("Address", language)}:{" "}
          <a
            className={"map-link" + (isMobile ? " mobile" : "")}
            target="_blank"
            rel="noreferrer"
            href="https://maps.app.goo.gl/vghhqZPiD1JMBuDq8"
          >
            34212 Pacific Coast Hwy Unit A, Dana Point, CA 92629
          </a>
          )
        </div>
        <div className={"schedule-content-text" + (isMobile ? " mobile" : "")}>
          7:15pm-8:30pm: {getText("Dinner and Drinks", language)}
        </div>
        <div className={"schedule-content-text" + (isMobile ? " mobile" : "")}>
          8:30pm: {getText("Cake Cutting", language)}
        </div>
        <div className={"schedule-content-text" + (isMobile ? " mobile" : "")}>
          9:00pm-10:00pm: {getText("Go Home", language)}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
