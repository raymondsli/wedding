import "./Schedule.css";

function Schedule(props) {
  return (
    <div ref={props.ref}>
      <h1 className="subsection-header">Schedule</h1>
      <div className="schedule-content-container">
        <div className="schedule-content-text">
          5:15pm: Arrive at Pines Park (Address: 34941 Camino Capistrano,
          Capistrano Beach, CA 92624){" "}
        </div>
        <div className="schedule-content-text">
          5:30pm-5:45pm: Wedding Ceremony
        </div>
        <div className="schedule-content-text">
          5:45pm-6:30pm: Photos with Guests
        </div>
        <div className="schedule-content-text">
          6:30pm-7:15pm: Arrive at Whitestone Restaurant & Bar (Address: 34212
          Pacific Coast Hwy Unit A, Dana Point, CA 92629)
        </div>
        <div className="schedule-content-text">
          7:15pm-8:30pm: Dinner and Drinks{" "}
        </div>
        <div className="schedule-content-text">8:30pm: Wedding Cake </div>
        <div className="schedule-content-text">9:00pm-10:00pm: Go Home</div>
      </div>
    </div>
  );
}

export default Schedule;
