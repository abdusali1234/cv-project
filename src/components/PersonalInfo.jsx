import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function PersonalInfo({
  info,
  handleNameChange,
  handleEmailChange,
  handlePhoneNumChange,
  handleLinkedInChange,
}) {
  return (
    <>
      <div>
        <h1>Personal Information</h1>
        <form>
          <label>
            Name
            <input value={info.name} onChange={handleNameChange} />
          </label>
          <label>
            Email <MdEmail />
            <input value={info.email} onChange={handleEmailChange} />
          </label>
          <label>
            Phone Number <FaPhone />
            <input value={info.phoneNum} onChange={handlePhoneNumChange} />
          </label>
          <label>
            LinkedIn <FaLinkedin />
            <input value={info.linkedIn} onChange={handleLinkedInChange} />
          </label>
        </form>
      </div>
    </>
  );
}
