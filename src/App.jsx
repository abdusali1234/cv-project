import { useState } from "react";
import PersonalInfoInput from "./components/PersonalInfo";
import CurriculumVitae from "./components/CurriculumVitate";
import WorkExperienceInput from "./components/WorkExperience.jsx";
import { FaPlusSquare } from "react-icons/fa";
import "./App.css";

function App() {
  const [info, setPersonalInfo] = useState({
    fullName: "John Doe",
    email: "mail@mail.com",
    phoneNum: "012345678910",
    linkedIn: "",
  });

  const [experiences, setExperiences] = useState([
    {
      companyName: "Macrohard",
      positionTitle: "Chief Coffee Maker",
      startDate: "Jun 1999",
      endDate: "Present",
      description: "Applied the art of coffee enemas to CEO Mr Billiam Hates",
    },
  ]);

  function updatePersonalInfo(e) {
    // You can get attributes from event.target via an object. AMAZING!!!
    const { name, value } = e.target;
    setPersonalInfo({
      ...info,
      [name]: value,
    });
    console.log(name, value);
  }

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
      <div id="editSection">
        <PersonalInfoInput
          info={info}
          handleChange={updatePersonalInfo}
        ></PersonalInfoInput>
        {experiences.map((experience, index) => (
          <WorkExperienceInput
            key={index}
            index={index}
            info={experience}
            handleChange={(e) => updateWorkExperience(index, e)}
            handleDelete={() => deleteWorkExperience(index)}
          ></WorkExperienceInput>
        ))}
        <h1>
          <FaPlusSquare onClick={addWorkExperience} />
        </h1>
      </div>
      <div id="cvDisplay">
        <CurriculumVitae
          personalInfo={info}
          workExperiences={experiences}
        ></CurriculumVitae>
      </div>
    </>
  );
}

export default App;
