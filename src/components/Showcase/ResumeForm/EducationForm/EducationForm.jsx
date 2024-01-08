import "./EducationForm.css";
import ButtonComponent from "../../../../elements/ButtonComponent";

export default function EducationForm({
  educationData,
  handleChange,
  handleEducationFormSubmit,
}) {
  return (
    <form id="educationForm" onSubmit={handleEducationFormSubmit}>
      <div>
        <label htmlFor="schoolName">School Name:</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={educationData.schoolName}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="degreeName">Degree:</label>
        <input
          type="text"
          id="degreeName"
          name="degreeName"
          value={educationData.degreeName}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="educationStartDate">Start Date:</label>
        <input
          type="text"
          id="educationStartDate"
          name="educationStartDate"
          value={educationData.educationStartDate}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="educationEndDate">End Date:</label>
        <input
          type="text"
          id="educationEndDate"
          name="educationEndDate"
          value={educationData.educationEndDate}
          onChange={handleChange}
        ></input>
      </div>
      <ButtonComponent buttonText="add" />
    </form>
  );
}
