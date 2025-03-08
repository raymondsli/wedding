import "./Schedule.css";

function Schedule(props) {
  const isMobile = window.innerWidth < 500;

  const textClassName =
    window.innerWidth < 500
      ? "schedule-content-text-mobile"
      : "schedule-content-text";

  return (
    <div ref={props.ref}>
      <h1 className={"subsection-header" + (isMobile ? " mobile" : "")}>
        Schedule
      </h1>
      <div className="schedule-content-container">
        <div className={textClassName}>
          5:15pm: Arrive at Pines Park (Address: 34941 Camino Capistrano,
          Capistrano Beach, CA 92624){" "}
        </div>
        <div className={textClassName}>5:30pm-5:45pm: Wedding Ceremony</div>
        <div className={textClassName}>5:45pm-6:30pm: Photos with Guests</div>
        <div className={textClassName}>
          6:30pm-7:15pm: Arrive at Whitestone Restaurant & Bar (Address: 34212
          Pacific Coast Hwy Unit A, Dana Point, CA 92629)
        </div>
        <div className={textClassName}>7:15pm-8:30pm: Dinner and Drinks </div>
        <div className={textClassName}>8:30pm: Wedding Cake </div>
        <div className={textClassName}>9:00pm-10:00pm: Go Home</div>
      </div>
    </div>
  );
}

export default Schedule;
