import "./Dinner.css";
import MainCourseModal from "./MainCourseModal";
import { useState } from "react";

function Dinner(props) {
  const [showMainCourseModal, setShowMainCourseModal] = useState(false);
  return (
    <div className="dinner-page" ref={props.ref}>
      <h1 className="subsection-header">Dinner</h1>
      <div className="dinner-menu-image" />
      <button
        className="dinner-button"
        onClick={() => setShowMainCourseModal(true)}
      >
        Choose Main Course
      </button>
      {showMainCourseModal && (
        <MainCourseModal closeModal={() => setShowMainCourseModal(false)} />
      )}
    </div>
  );
}

export default Dinner;
