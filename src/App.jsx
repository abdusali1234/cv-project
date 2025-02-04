import { useState } from "react";
import PersonalInfoInput from "./components/PersonalInfo";
import CurriculumVitae from "./components/CurriculumVitae";
import WorkExperienceInput from "./components/WorkExperience.jsx";
import EducationInput from "./components/Education.jsx";
import { FaPlusSquare } from "react-icons/fa";
import "./App.css";

function App() {
  const [info, setPersonalInfo] = useState({
    fullName: "John Doe",
    email: "mail@mail.com",
    phoneNum: "012345678910",
    linkedIn: "",
  });

  const [educations, setEducations] = useState([
    {
      schoolName: "Krusty's clown school",
      studyTitle: "Bachelors in clownery",
      startDate: "Sept 1995",
      endDate: "Jun 1998",
      description: "Masters thesis: To Seltzer or Not to Seltzer?",
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      companyName: "Macrohard",
      positionTitle: "Chief Coffee Maker",
      startDate: "Jun 1999",
      endDate: "Present",
      description: "Applied the art of coffee enemas to CEO Mr Billiam Hates",
    },
  ]);

  // PERSONAL INFO

  function updatePersonalInfo(e) {
    // You can get attributes from event.target via an object. AMAZING!!!
    const { name, value } = e.target;
    setPersonalInfo({
      ...info,
      [name]: value,
    });
  }

  // EDUCATION

  function addEducation() {
    let newEd = {
      schoolName: "School name",
      studyTitle: "Title of study",
      startDate: "Start Date",
      endDate: "End date (or enter present/ongoing)",
      description: "Did some stuff inniittt",
    };
    setEducations((ed) => [...ed, newEd]);
  }

  function deleteEducation(index) {
    const updatedEds = educations.filter((_, i) => index !== i);
    setEducations(updatedEds);
  }

  function updateEducation(index, e) {
    const { name, value } = e.target;
    const updatedEds = [...educations];
    updatedEds[index] = {
      ...updatedEds[index],
      [name]: value,
    };
    setEducations(updatedEds);
  }

  // WORK EXPERIENCE

  function addWorkExperience() {
    let newWorkExp = {
      companyName: "Company name",
      positionTitle: "Position title",
      startDate: "Start Date",
      endDate: "End date (or enter present/ongoing)",
      description: "Did some stuff inniittt",
    };
    setExperiences((workExp) => [...workExp, newWorkExp]);
  }

  function deleteWorkExperience(index) {
    const updatedExperiences = experiences.filter((_, i) => index !== i);
    setExperiences(updatedExperiences);
  }

  function updateWorkExperience(index, e) {
    const { name, value } = e.target;
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [name]: value,
    };
    setExperiences(updatedExperiences);
  }

  return (
    <>
      <div id="editScroll">
        <div id="editSection">
          <PersonalInfoInput
            info={info}
            handleChange={updatePersonalInfo}
          ></PersonalInfoInput>

          {educations.map((experience, index) => (
            <EducationInput
              key={index}
              index={index}
              info={experience}
              handleChange={(e) => updateEducation(index, e)}
              handleDelete={() => deleteEducation(index)}
            ></EducationInput>
          ))}
          <button className="addEntry" onClick={addEducation}>
            <h2 className="iconContainer">
              Add Education
              <FaPlusSquare />
            </h2>
          </button>

          {experiences.map((experience, index) => (
            <WorkExperienceInput
              key={index}
              index={index}
              info={experience}
              handleChange={(e) => updateWorkExperience(index, e)}
              handleDelete={() => deleteWorkExperience(index)}
            ></WorkExperienceInput>
          ))}
          <button className="addEntry" onClick={addWorkExperience}>
            <h2 className="iconContainer">
              Add Experience
              <FaPlusSquare />
            </h2>
          </button>
        </div>
      </div>
      <div id="cvScroll">
        <div id="cvSection">
          <div id="cvContainer">
            <CurriculumVitae
              personalInfo={info}
              workExperiences={experiences}
              educations={educations}
            ></CurriculumVitae>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
