import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function HasLinkedIn({ linkedInAddress }) {
  return (
    <div>
      {linkedInAddress !== "none" ? <FaLinkedin /> + linkedInAddress : ""}
    </div>
  );
}

function CurriculumVitae({ info }) {
  return (
    <>
      <div id="curriculumVitae">
        <div id="personalDetails">
          r<h1 id="name">{info.name}</h1>
          <div id="otherDetails">
            <div>
              <FaPhone /> {info.phoneNum} |{" "}
            </div>
            <div>
              <MdEmail /> {info.email} |{" "}
            </div>

            <HasLinkedIn linkedInAddress={info.linkedIn}></HasLinkedIn>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurriculumVitae;
