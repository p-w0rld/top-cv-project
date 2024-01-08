import "./Showcase.css";
import { useState } from "react";
import ResumeForm from "./ResumeForm/ResumeForm";
import ContactRow from "./ContactRow/ContactRow";
import EducationRow from "./EducationRow/EducationRow";
import WorkRow from "./WorkRow/WorkRow";

export default function Showcase() {
  const removeContactCallback = (firstName) => {
    updateContactContents((contactContents) => {
      const contents = contactContents;
      return contents.filter((content) => content.key !== firstName);
    });
  };

  const removeEducationCallback = (schoolName) => {
    updateEducationContents((educationContents) => {
      const contents = educationContents;
      return contents.filter((content) => content.key !== schoolName);
    });
  };
  const removeWorkCallback = (companyName) => {
    updateWorkContents((workContents) => {
      const contents = workContents;
      return contents.filter((content) => content.key !== companyName);
    });
  };

  const randomData = {
    contactData: [
      <ContactRow
        key="Jane Doe"
        name="Jane Doe"
        email="aksdjksakajk@gmail.com"
        phoneNumber="+1289312988"
        removeCallback={removeContactCallback}
      />,
      <ContactRow
        key="John Doe"
        name="John Doe"
        email="johndoe@gmail.com"
        phoneNumber="+9821371112"
        removeCallback={removeContactCallback}
      />,
      <ContactRow
        key="Cool Person"
        name="Cool Person"
        email="coolperson@gmail.com"
        phoneNumber="+112989213"
        removeCallback={removeContactCallback}
      />,
    ],
    educationData: [
      <EducationRow
        key="Some State University"
        schoolName="Some State University"
        degreeName="Computer Science"
        educationStartDate="08/2017"
        educationEndDate="05/2022"
        removeCallback={removeEducationCallback}
      />,
      <EducationRow
        key="Some Highschool"
        schoolName="Some Highschool"
        degreeName="Diploma"
        educationStartDate="08/2013"
        educationEndDate="05/2017"
        removeCallback={removeEducationCallback}
      />,
      <EducationRow
        key="Hugh Jass University"
        schoolName="Hugh Jass University"
        degreeName="Arts"
        educationStartDate="08/2017"
        educationEndDate="PRESENT"
        removeCallback={removeEducationCallback}
      />,
    ],
    workData: [
      <WorkRow
        key="SuperCompany"
        companyName="SuperCompany"
        positionTitle="Consultant"
        jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        workStartDate="08/2021"
        workEndDate="PRESENT"
        removeCallback={removeWorkCallback}
      />,
      <WorkRow
        key="Some University"
        companyName="Some University"
        positionTitle="IT Engineer"
        jobDescription="Nam elementum suscipit neque vel volutpat. Mauris nec accumsan nisl. Pellentesque lacinia urna quis leo euismod, quis tincidunt massa commodo. Pellentesque volutpat scelerisque nibh, at aliquet ligula laoreet in. Cras eget quam blandit, tristique est a, volutpat purus. Proin id nibh imperdiet urna pretium congue quis eget tortor. Praesent euismod, tellus vestibulum rhoncus tristique, erat felis malesuada magna, id tincidunt nibh felis iaculis justo. Mauris porta hendrerit varius. Aenean nec vestibulum arcu."
        workStartDate="05/2020"
        workEndDate="05/2021"
        removeCallback={removeWorkCallback}
      />,
      <WorkRow
        key="Healthcare Company"
        companyName="Healthcare Company"
        positionTitle="Software Intern"
        jobDescription="Aliquam in vulputate eros. Ut fermentum enim vitae mauris porttitor molestie. Curabitur et mattis magna, nec iaculis orci. Suspendisse neque enim, sollicitudin sit amet quam et, laoreet scelerisque urna."
        workStartDate="05/2021"
        workEndDate="PRESENT"
        removeCallback={removeWorkCallback}
      />,
      <WorkRow
        key="Freelance"
        companyName="Freelance"
        positionTitle="CEO"
        jobDescription="Aliquam pulvinar interdum malesuada. Nulla sollicitudin, ante eget viverra hendrerit, dui dolor lobortis velit, id iaculis lacus nisi in ipsum. Nunc finibus, mi eget dictum iaculis, est leo scelerisque urna, eu hendrerit sem quam a est. Ut in ultricies arcu, non posuere purus. Donec posuere tempus tellus."
        workStartDate="01/2015"
        workEndDate="PRESENT"
        removeCallback={removeWorkCallback}
      />,
      <WorkRow
        key="TOP"
        companyName="TOP"
        positionTitle="React Dev"
        jobDescription="Donec gravida nunc enim, ac dignissim ex ultricies quis. Praesent est lectus, imperdiet id viverra in, porta et nisi. Etiam vitae nunc felis. Nullam rhoncus nulla velit, eget placerat lacus dapibus sed."
        workStartDate="04/2016"
        workEndDate="08/2019"
        removeCallback={removeWorkCallback}
      />,
      <WorkRow
        key="Lalaland"
        companyName="Lalaland"
        positionTitle="Dream Job"
        jobDescription="Donec nulla libero, volutpat id neque id, rutrum feugiat sem. Maecenas placerat neque ac urna maximus dignissim. Mauris ac tristique turpis, non tincidunt turpis. Cras fringilla, risus id egestas tincidunt, metus diam iaculis erat, nec facilisis turpis metus nec nulla."
        workStartDate="10/1999"
        workEndDate="1/2024"
        removeCallback={removeWorkCallback}
      />,
    ],
  };
  const defaultContactData = {
    maxRows: 1,
    name: "",
    email: "",
    phoneNumber: "",
  };
  const defaultEducationData = {
    maxRows: 3,
    schoolName: "",
    degreeName: "",
    educationStartDate: "",
    educationEndDate: "",
  };
  const defaultWorkData = {
    maxRows: 3,
    companyName: "",
    positionTitle: "",
    jobDescription: "",
    workStartDate: "",
    workEndDate: "",
  };

  const [errorMsg, setErrorMsg] = useState("");
  const [contactData, setContactData] = useState(defaultContactData);
  const [educationData, setEducationData] = useState(defaultEducationData);
  const [workData, setWorkForm] = useState(defaultWorkData);
  const [contactContents, updateContactContents] = useState([
    <ContactRow
      key="Jane Doe"
      name="Jane Doe"
      email="aksdjksakajk@gmail.com"
      phoneNumber="+1289312988"
      removeCallback={removeContactCallback}
    />,
  ]);
  const [educationContents, updateEducationContents] = useState([
    <EducationRow
      key="Some State University"
      schoolName="Some State University"
      degreeName="Computer Science"
      educationStartDate="08/2017"
      educationEndDate="05/2022"
      removeCallback={removeEducationCallback}
    />,
  ]);
  const [workContents, updateWorkContents] = useState([
    <WorkRow
      key="SuperCompany"
      companyName="SuperCompany"
      positionTitle="Consultant"
      jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      workStartDate="08/2021"
      workEndDate="PRESENT"
      removeCallback={removeWorkCallback}
    />,
    <WorkRow
      key="Some University"
      companyName="Some University"
      positionTitle="IT Engineer"
      jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      workStartDate="05/2020"
      workEndDate="05/2021"
      removeCallback={removeWorkCallback}
    />,
    <WorkRow
      key="Healthcare Company"
      companyName="Healthcare Company"
      positionTitle="Software Intern"
      jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      workStartDate="05/2021"
      workEndDate="08/2021"
      removeCallback={removeWorkCallback}
    />,
  ]);
  // const [contactContents, updateContactContents] = useState([]);
  // const [educationContents, updateEducationContents] = useState([]);
  // const [workContents, updateWorkContents] = useState([]);

  const handleContactFormSubmit = (event) => {
    event.preventDefault();
    var rowCount = 0;

    contactContents.forEach((content) => {
      if (content.type === ContactRow) {
        rowCount++;
      }
    });

    if (rowCount === contactData.maxRows) {
      setErrorMsg(`No more than ${contactData.maxRows} contact rows allowed!`);
      setTimeout(function () {
        setErrorMsg("");
      }, 5000);
    } else {
      updateContactContents((prevContents) => [
        ...prevContents,
        <ContactRow
          key={contactData.name}
          name={contactData.name}
          email={contactData.email}
          phoneNumber={contactData.phoneNumber}
          removeCallback={removeContactCallback}
        />,
      ]);
    }

    setContactData(defaultContactData);
  };

  const handleEducationFormSubmit = (event) => {
    event.preventDefault();
    var rowCount = 0;

    educationContents.forEach((content) => {
      if (content.type === EducationRow) {
        rowCount++;
      }
    });

    if (rowCount === educationData.maxRows) {
      setErrorMsg(
        `No more than ${educationData.maxRows} education rows allowed!`
      );
      setTimeout(function () {
        setErrorMsg("");
      }, 5000);
    } else {
      updateEducationContents((prevContents) => [
        ...prevContents,
        <EducationRow
          key={educationData.schoolName}
          schoolName={educationData.schoolName}
          degreeName={educationData.degreeName}
          educationStartDate={educationData.educationStartDate}
          educationEndDate={educationData.educationEndDate}
          removeCallback={removeEducationCallback}
        />,
      ]);
    }

    setEducationData(defaultEducationData);
  };

  const randomizeHandler = () => {
    // reset existing contents
    resetHandler();

    for (let i = 0; i < contactData.maxRows; i++) {
      updateContactContents(() => {
        return [
          randomData["contactData"][
            Math.floor(Math.random() * randomData["contactData"].length)
          ],
        ];
      });
    }

    updateEducationContents(() => {
      let contents = [];

      for (let i = 0; i < educationData.maxRows; i++) {
        let index = Math.floor(
          Math.random() * randomData["educationData"].length
        );
        if (
          !contents.find(
            (content) => content.key === randomData["educationData"][index].key
          )
        ) {
          contents.push(randomData["educationData"][index]);
        } else {
          i--;
        }
      }

      return contents;
    });

    updateWorkContents(() => {
      let contents = [];

      for (let i = 0; i < workData.maxRows; i++) {
        let index = Math.floor(Math.random() * randomData["workData"].length);
        if (
          !contents.find(
            (content) => content.key === randomData["workData"][index].key
          )
        ) {
          contents.push(randomData["workData"][index]);
        } else {
          i--;
        }
      }

      return contents;
    });
  };

  const resetHandler = () => {
    updateContactContents([]);
    updateEducationContents([]);
    updateWorkContents([]);
  };

  const handleWorkFormSubmit = (event) => {
    event.preventDefault();
    var rowCount = 0;

    workContents.forEach((content) => {
      if (content.type === WorkRow) {
        rowCount++;
      }
    });

    if (rowCount === workData.maxRows) {
      setErrorMsg(`No more than ${workData.maxRows} work rows allowed!`);
      setTimeout(function () {
        setErrorMsg("");
      }, 5000);
    } else {
      updateWorkContents((prevContents) => [
        ...prevContents,
        <WorkRow
          key={workData.companyName}
          companyName={workData.companyName}
          positionTitle={workData.positionTitle}
          jobDescription={workData.jobDescription}
          workStartDate={workData.workStartDate}
          workEndDate={workData.workEndDate}
          removeCallback={removeWorkCallback}
        />,
      ]);
    }

    setWorkForm(defaultWorkData);
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleEducationChange = (event) => {
    const { name, value } = event.target;
    setEducationData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleWorkChange = (event) => {
    const { name, value } = event.target;
    setWorkForm((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div id="body">
      <ResumeForm
        handleContactChange={handleContactChange}
        contactData={contactData}
        handleContactFormSubmit={handleContactFormSubmit}
        handleEducationChange={handleEducationChange}
        educationData={educationData}
        handleEducationFormSubmit={handleEducationFormSubmit}
        handleWorkChange={handleWorkChange}
        workData={workData}
        handleWorkFormSubmit={handleWorkFormSubmit}
        randomizeHandler={randomizeHandler}
        resetHandler={resetHandler}
        errorMsg={errorMsg}
      />
      <div id="showcaseContent">
        <div id="contactContents">{contactContents}</div>
        <span>Education</span>
        <div id="educationContents">{educationContents}</div>
        <span>Work Experience</span>
        <div id="workContents">{workContents}</div>
      </div>
    </div>
  );
}
