import "./Dinner.css";
import MainCourseButtonAndModal from "./MainCourseButtonAndModal";

function Dinner() {
  return (
    <div className="dinner-page">
      <h1 className="subsection-header">Dinner</h1>
      <div className="dinner-menu-image" />
      <MainCourseButtonAndModal />
    </div>
  );
}

export default Dinner;
