import "./MainCourseButtonAndModal.css";
import Modal from "react-modal";
import { useState } from "react";
import FormModal from "../../components/FormModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    width: "400px",
  },
};

function MainCourseButtonAndModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [mainCourseOption, setMainCourseOption] = useState("");

  return (
    <>
      <button className="dinner-button" onClick={() => setIsOpen(true)}>
        Choose Main Course
      </button>
      <FormModal
        modalIsOpen={modalIsOpen}
        onClose={() => setIsOpen(false)}
        customStyles={customStyles}
      >
        <h2 className="modal-title-text">Choose Main Course</h2>
        <form>
          <div className="form-field">
            <div className="form-text">
              <label for="fname">Name</label>
            </div>
            <div>
              <input
                type="text"
                id="fname"
                name="fname"
                onChange={(e) => setMainCourseOption(e.target.value)}
              />
            </div>
          </div>
          <div className="form-field">
            <div className="form-text">
              <label for="main-course">Choose your main course</label>
            </div>
            <div>
              <select
                id="main-course"
                name="main-course"
                onChange={(e) => setMainCourseOption(e.target.value)}
              >
                <option disabled value>
                  {" "}
                  -- select an option --{" "}
                </option>
                <option value="wild mushroom ravioli">
                  Wild Mushroom Ravioli
                </option>
                <option value="10oz filet mignon">10oz Filet Mignon</option>
                <option value="chilean sea bass">Chilean Sea Bass</option>
                <option value="jidori roasted chicken">
                  Jidori Roasted Chickn
                </option>
              </select>
            </div>
          </div>
        </form>
        <button onClick={() => setIsOpen(false)}>close</button>
      </FormModal>
    </>
  );
}

export default MainCourseButtonAndModal;
