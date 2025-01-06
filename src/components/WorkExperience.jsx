import { FaTrashAlt } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";

export default function WorkExperienceInput({
  info,
  index,
  handleChange,
  handleDelete,
}) {
  return (
    <>
      <div id="workExperience" className="experienceContainer">
        <h1 className="iconContainer">
          <FaSuitcase /> Work Experience {index + 1}
          {index !== 0 && (
            <>
              <FaTrashAlt className="deleteBin" onClick={handleDelete} />
            </>
          )}
        </h1>

        <form>
          <label htmlFor={`companyName-${index}`}>Company Name</label>
          <input
            id={`companyName-${index}`}
            name="companyName"
            value={info.companyName}
            onChange={handleChange}
          />
          <label htmlFor={`positionTitle-${index}`}>Position Title</label>
          <input
            id={`positionTitle-${index}`}
            name="positionTitle"
            value={info.positionTitle}
            onChange={handleChange}
          />
          <label htmlFor={`startDate-${index}`}>Start Date</label>
          <input
            id={`startDate-${index}`}
            name="startDate"
            value={info.startDate}
            onChange={handleChange}
          />
          <label htmlFor={`endDate-${index}`}>End Date</label>
          <input
            id={`endDate-${index}`}
            name="endDate"
            value={info.endDate}
            onChange={handleChange}
          />
          <label htmlFor={`description-${index}`}>Description</label>
          <textarea
            id={`description-${index}`}
            name="description"
            value={info.description}
            onChange={handleChange}
          ></textarea>
        </form>
      </div>
    </>
  );
}
