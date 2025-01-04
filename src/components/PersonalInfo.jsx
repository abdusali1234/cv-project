import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function PersonalInfoInput({ info, handleChange }) {
  return (
    <>
      <div>
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
            Email <MdEmail />
          </label>
          <input
            id="email"
            name="email"
            value={info.email}
            onChange={handleChange}
          />
          <label htmlFor="phone">
            Phone Number <FaPhone />
          </label>
          <input
            id="phone"
            name="phone"
            value={info.phoneNum}
            onChange={handleChange}
          />
          <label htmlFor="linedIn">
            LinkedIn <FaLinkedin />
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
