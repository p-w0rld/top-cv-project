import "./WorkForm.css";
import ButtonComponent from "../../../../elements/ButtonComponent";

function WorkForm({ workData, handleChange, handleWorkFormSubmit }) {
  return (
    <form id="workForm" onSubmit={handleWorkFormSubmit}>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={workData.companyName}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="positionTitle">Position Title:</label>
        <input
          type="text"
          id="positionTitle"
          name="positionTitle"
          value={workData.positionTitle}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="jobDescription">Job Description:</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          rows="4"
          cols="20"
          value={workData.jobDescription}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="workStartDate">Start Date:</label>
        <input
          type="text"
          id="workStartDate"
          name="workStartDate"
          value={workData.workStartDate}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="workEndDate">End Date:</label>
        <input
          type="text"
          id="workEndDate"
          name="workEndDate"
          value={workData.workEndDate}
          onChange={handleChange}
        ></input>
      </div>
      <ButtonComponent buttonText="add" />
    </form>
  );
}

export default WorkForm;
