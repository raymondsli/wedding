import { useState } from "react";
import FormModal from "../../components/FormModal";
import FormButton from "../../components/FormButton";
import Select from "react-select";

const mainCourseOptions = [
  {
    value: "wild mushroom ravioli",
    label: "Wild Mushroom Ravioli (vegetarian)",
  },
  { value: "10oz filet mignon", label: "10oz Filet Mignon" },
  { value: "chilean sea bass", label: "Chilean Sea Bass" },
  { value: "jidori roasted chicken", label: "Jidori Roasted Chicken" },
];

function MainCourseButtonAndModal(props) {
  const { closeModal } = props;
  const [name, setName] = useState("");
  const [mainCourseOption, setMainCourseOption] = useState("");

  const toolTipMessage = () => {
    if (name == "" && mainCourseOption == "") {
      return "Name and main course selection are missing";
    } else if (name == "") {
      return "Name is missing";
    } else if (mainCourseOption == "") {
      return "Main course selection is missing";
    }
    return null;
  };

  const submitMainCourseForm = () => {
    closeModal();
  };

  return (
    <FormModal onClose={closeModal}>
      <h2 className="modal-title-text">Choose Main Course</h2>
      <form>
        <div className="form-field">
          <div className="form-text">
            <label for="fname">Name</label>
          </div>
          <div>
            <input
              type="text"
              placeholder="Name"
              id="fname"
              name="fname"
              className="form-input"
              onChange={(e) => setName(e.target.value)}
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
              dropdownIndicator: (baseStyles, state) => ({
                ...baseStyles,
                color: "black",
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
      <div className="form-buttons-container">
        <FormButton text="Close" onClick={closeModal} isDisabled={false} />
        <FormButton
          text="Submit"
          onClick={submitMainCourseForm}
          toolTip={toolTipMessage()}
          isDisabled={name == "" || mainCourseOption == ""}
        />
      </div>
    </FormModal>
  );
}

export default MainCourseButtonAndModal;
