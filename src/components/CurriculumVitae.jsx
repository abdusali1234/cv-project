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
            <div className="iconContainer">
              <FaPhone /> <span>{personalInfo.phoneNum}</span> |{" "}
            </div>
            <div className="iconContainer">
              <MdEmail /> <span>{personalInfo.email}</span>
            </div>

            <div className="iconContainer">
              {personalInfo.linkedIn && (
                <>
                  | <FaLinkedin /> <span>{personalInfo.linkedIn}</span>
                </>
              )}{" "}
            </div>
          </div>
        </div>
        <div id="education">
          <h2 className="sectionTitle">
            <div className="sectionTitleLabel">Education</div>
            <div className="underline"></div>
          </h2>
          {educations.map((education, index) => (
            <div
              className="educationEntry"
              id={`education-${index}`}
              name="cvEducation"
              key={index}
            >
              <div className="cvSchoolName">
                <b>{education.schoolName}</b>
              </div>
              <div className="cvStudyTitle">{education.studyTitle}</div>
              <div className="cvDates">
                {education.startDate} - {education.endDate}
              </div>

              <div className="cvDescription">{education.description}</div>
            </div>
          ))}
        </div>
        <div id="workExperience">
          <h2 className="sectionTitle">
            <div className="sectionTitleLabel">Work Experience</div>
            <div className="underline"></div>
          </h2>
          {workExperiences.map((experience, index) => (
            <div
              className="experienceEntry"
              id={`experience-${index}`}
              name="cvExperience"
              key={index}
            >
              <div className="cvCompanyName">
                <b>{experience.companyName}</b>
              </div>
              <div className="cvPositionTitle">{experience.positionTitle}</div>
              <div className="cvDates">
                {experience.startDate} - {experience.endDate}
              </div>
              <div className="cvDescription">{experience.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CurriculumVitae;
