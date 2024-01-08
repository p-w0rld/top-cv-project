import "./WorkRow.css";
import { useState } from "react";

export default function WorkRow({
  companyName,
  jobDescription,
  positionTitle,
  workStartDate,
  workEndDate,
  removeCallback,
}) {
  const removeHandler = (event) => {
    removeCallback(companyName, event);
  };

  return (
    <div onClick={removeHandler} className="work-row hover">
      <div className="remove">Click to remove</div>
      <div className="work-header">
        <div className="left-column">
          <span className="bold">{companyName}</span>
          <span className="light">{positionTitle}</span>
        </div>
        <div className="right-column light dates">
          {workStartDate} - {workEndDate}
        </div>
      </div>
      <div className="job-desc">{jobDescription}</div>
    </div>
  );
}
