import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function PersonalInfoInput({ info, handleChange }) {
  return (
    <>
      <div id="PersonalInfoInput">
        <h1>Personal Information</h1>
        <form>
          <label htmlFor="fullName">Name</label>
          <input
            id="fullName"
            name="fullName"
            value={info.fullName}
            onChange={handleChange}
          />
          <label htmlFor="email">
            <div className="iconContainer">
              Email <MdEmail />
            </div>
          </label>
          <input
            id="email"
            name="email"
            value={info.email}
            onChange={handleChange}
          />
          <label htmlFor="phone">
            <div className="iconContainer">
              Phone Number <FaPhone />
            </div>
          </label>
          <input
            id="phoneNum"
            name="phoneNum"
            value={info.phoneNum}
            onChange={handleChange}
          />
          <label htmlFor="linedIn">
            <div className="iconContainer">
              LinkedIn <FaLinkedin />
            </div>
          </label>
          <input
            id="linkedIn"
            name="linkedIn"
            value={info.linkedIn}
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
}
