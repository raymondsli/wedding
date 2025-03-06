import { useState } from "react";
import FormModal from "../../components/FormModal";
import Select from "react-select";

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

const mainCourseOptions = [
  { value: "wild mushroom ravioli", label: "Wild Mushroom Ravioli" },
  { value: "10oz filet mignon", label: "10oz Filet Mignon" },
  { value: "chilean sea bass", label: "Chilean Sea Bass" },
  { value: "jidori roasted chicken", label: "Jidori Roasted Chicken" },
];

function MainCourseButtonAndModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [mainCourseOption, setMainCourseOption] = useState(null);

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
                className="form-input"
                onChange={(e) => setMainCourseOption(e.target.value)}
              />
            </div>
          </div>
          <div className="form-field">
            <div className="form-text">
              <label for="main-course">Choose your main course</label>
            </div>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  border: "solid 1px black",
                  boxShadow: "none",
                  "&:hover": {
                    border: "solid 1px black !important",
                  },
                }),
              }}
              placeholder="Select option"
              value={mainCourseOption}
              onChange={setMainCourseOption}
              options={mainCourseOptions}
              menuPortalTarget={document.body}
            />
          </div>
        </form>
        <button onClick={() => setIsOpen(false)}>close</button>
      </FormModal>
    </>
  );
}

export default MainCourseButtonAndModal;
