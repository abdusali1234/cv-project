import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function CurriculumVitae({ info }) {
  return (
    <>
      <div id="curriculumVitae">
        <div id="personalDetails">
          <h1 id="name">{info.name}</h1>
          <div id="otherDetails">
            <div>
              <FaPhone /> <span>{info.phoneNum}</span> |{" "}
            </div>
            <div>
              <MdEmail /> <span>{info.email}</span> |{" "}
            </div>

            <div>
              {info.linkedIn && (
                <>
                  <FaLinkedin /> <span>{info.linkedIn}</span>
                </>
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurriculumVitae;
