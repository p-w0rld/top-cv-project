import "./EducationRow.css";

export default function EducationRow({
  schoolName,
  degreeName,
  educationStartDate,
  educationEndDate,
  removeCallback,
}) {
  const removeHandler = () => {
    removeCallback(schoolName);
  };
  return (
    <div onClick={removeHandler} className="education-row hover">
      <div className="remove">Click to remove</div>
      <div className="header">
        <div className="left-column">
          <span className="bold">{schoolName}</span>
          <span className="light">{degreeName}</span>
        </div>
        <div className="right-column light dates">
          {educationStartDate} - {educationEndDate}
        </div>
      </div>
    </div>
  );
}
