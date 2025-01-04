import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function CurriculumVitae({ personalInfo, educations, workExperiences }) {
  return (
    <>
      <div id="curriculumVitae">
        <div id="personalDetails">
          <h1 id="name">{personalInfo.fullName}</h1>
          <div id="otherPersonalDetails">
            <div>
              <FaPhone /> <span>{personalInfo.phoneNum}</span> |{" "}
            </div>
            <div>
              <MdEmail /> <span>{personalInfo.email}</span> |{" "}
            </div>

            <div>
              {personalInfo.linkedIn && (
                <>
                  <FaLinkedin /> <span>{personalInfo.linkedIn}</span>
                </>
              )}{" "}
            </div>
          </div>
        </div>
        <div id="education">
          <h2 className="sectionTitle">Education</h2>
          {educations.map((education, index) => (
            <div
              className="educationEntry"
              id={`education-${index}`}
              name="cvEducation"
              key={index}
            >
              <div className="cvSchoolName">{education.schoolName}</div>
              <div className="cvStudyTitle">{education.studyTitle}</div>
              <div className="cvStartDate">{education.startDate}</div>
              <div className="cvEndDate">{education.endDate}</div>
              <div className="cvDescription">{education.description}</div>
            </div>
          ))}
        </div>
        <div id="workExperience">
          <h2 className="sectionTitle">Work Experience</h2>
          {workExperiences.map((experience, index) => (
            <div
              className="experienceEntry"
              id={`experience-${index}`}
              name="cvExperience"
              key={index}
            >
              <div className="cvCompanyName">{experience.companyName}</div>
              <div className="cvPositionTitle">{experience.positionTitle}</div>
              <div className="cvStartDate">{experience.startDate}</div>
              <div className="cvEndDate">{experience.endDate}</div>
              <div className="cvDescription">{experience.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CurriculumVitae;
