import "./ResumeForm.css";
import ContactForm from "./ContactForm/ContactForm";
import EducationForm from "./EducationForm/EducationForm";
import WorkForm from "./WorkForm/WorkForm";
import ButtonComponent from "../../../elements/ButtonComponent";

function ResumeForm({
  errorMsg,
  handleContactChange,
  contactData,
  handleContactFormSubmit,
  handleEducationChange,
  educationData,
  handleEducationFormSubmit,
  handleWorkChange,
  workData,
  handleWorkFormSubmit,
  randomizeHandler,
  resetHandler,
}) {
  return (
    <div id="resumeForm">
      <div id="menu">
        <ButtonComponent
          buttonText="Randomize"
          onClickHandler={randomizeHandler}
        />
        <ButtonComponent buttonText="Reset" onClickHandler={resetHandler} />
      </div>
      <div id="errorMsg">{errorMsg}</div>
      <ContactForm
        contactData={contactData}
        handleChange={handleContactChange}
        handleContactFormSubmit={handleContactFormSubmit}
      />
      <EducationForm
        educationData={educationData}
        handleChange={handleEducationChange}
        handleEducationFormSubmit={handleEducationFormSubmit}
      />
      <WorkForm
        workData={workData}
        handleChange={handleWorkChange}
        handleWorkFormSubmit={handleWorkFormSubmit}
      />
    </div>
  );
}

export default ResumeForm;
