import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import CurriculumVitae from "./components/CurriculumVitate";
import WorkExperience from "./components/WorkExperience.jsx";
import "./App.css";

function App() {
  const [info, setPersonalInfo] = useState({
    name: "John Doe",
    email: "mail@mail.com",
    phoneNum: "012345678910",
    linkedIn: "",
  });

  const [experience, setExperience] = useState([
    {
      companyName: "Macrohard",
      positionTitle: "Chief Coffee Maker",
      startDate: "Jun 1999",
      endDate: "Present",
      description: "",
    },
  ]);

  console.log(experience.length);

  function updateName(e) {
    setPersonalInfo({
      ...info,
      name: e.target.value,
    });
  }

  function updateEmail(e) {
    setPersonalInfo({
      ...info,
      email: e.target.value,
    });
  }

  function updatephoneNum(e) {
    setPersonalInfo({
      ...info,
      phoneNum: e.target.value,
    });
  }
  function updateLinkedIn(e) {
    setPersonalInfo({
      ...info,
      linkedIn: e.target.value,
    });
  }

  function addWorkExperience() {
    let newWorkExp = {
      companyName: "Company name",
      positionTitle: "Position title",
      startDate: "Start Date",
      EndDate: "End date (or enter present/ongoing)",
    };
    setExperience((workExp) => [...workExp, newWorkExp]);
  }

  function deleteWorkExperience(index) {
    setExperience(experience.filter((workExp, i) => index != i));
  }

  function updateWorkExperience(updatedWorkExp, index) {
    setExperience(
      experience.map((workExp, i) => {
        index === i ? updatedWorkExp : workExp;
      })
    );
  }

  function updateCompName(e) {
    setExperience({
      ...experience,
      companyName: e.target.value,
    });
  }

  function updateTitle(e) {
    setExperience({
      ...experience,
      positionTitle: e.target.value,
    });
  }

  function updateStartDate(e) {
    setExperience({
      ...experience,
      startDate: e.target.value,
    });
  }

  function updateEndDate(e) {
    setExperience({
      ...experience,
      endDate: e.target.value,
    });
  }

  function updateDescription(e) {
    setExperience({
      ...experience,
      description: e.target.value,
    });
  }

  const experiences = [];

  for (let i = 0; i < experience.length; i++) {
    experiences.push(
      <WorkExperience
        key={i}
        index={i}
        info={experience[i]}
        handleCompanyNameChange={updateCompName}
        handleTitleChange={updateTitle}
        handleStartDateChange={updateStartDate}
        handleEndDateChange={updateEndDate}
        handleDescriptionChange={updateDescription}
      ></WorkExperience>
    );
  }

  console.log(experiences);

  return (
    <>
      <div id="editSection">
        <PersonalInfo
          info={info}
          handleNameChange={updateName}
          handleEmailChange={updateEmail}
          handlePhoneNumChange={updatephoneNum}
          handleLinkedInChange={updateLinkedIn}
          onDelete={deleteWorkExperience}
        ></PersonalInfo>
      </div>
      <div id="cvDisplay">
        <CurriculumVitae info={info}></CurriculumVitae>
        {experiences}
      </div>
    </>
  );
}

export default App;
