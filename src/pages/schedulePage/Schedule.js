import "./Schedule.css";

function Schedule() {
  return (
    <div>
      <h1 className="subsection-header">Schedule</h1>
      <div className="schedule-content-container">
        <div className="schedule-content-text">
          5:15: Arrive at Pines Park (Address: 34941 Camino Capistrano,
          Capistrano Beach, CA 92624){" "}
        </div>
        <div className="schedule-content-text">
          {" "}
          5:30-5:45: Wedding Ceremony 5:45-6:30: Photos with Guests{" "}
        </div>
        <div className="schedule-content-text">
          6:30-7:30: Arrive at Whitestone Restaurant & Bar (Address: 34212
          Pacific Coast Hwy Unit A, Dana Point, CA 92629){" "}
        </div>
        <div className="schedule-content-text">7:30-9: Dinner and Drinks </div>
        <div className="schedule-content-text">9:00: Wedding Cake </div>
        <div className="schedule-content-text">9:30: Go Home</div>
      </div>
    </div>
  );
}

export default Schedule;
