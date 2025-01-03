import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function PersonalInfoInput({ info, handleChange }) {
  return (
    <>
      <div>
        <h1>Personal Information</h1>
        <form>
          <label>
            Name
            <input
              id="fullName"
              name="fullName"
              value={info.fullName}
              onChange={handleChange}
            />
          </label>
          <label>
            Email <MdEmail />
            <input
              id="email"
              name="email"
              value={info.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number <FaPhone />
            <input
              id="phone"
              name="phone"
              value={info.phoneNum}
              onChange={handleChange}
            />
          </label>
          <label>
            LinkedIn <FaLinkedin />
            <input
              id="linkedIn"
              name="linkedIn"
              value={info.linkedIn}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
    </>
  );
}
