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
      <div id="workExperience">
        <h1>
          <FaSuitcase /> Work Experience {index + 1}
          <FaTrashAlt onClick={handleDelete} />
        </h1>
        <div>
          <form>
            <label>
              Company Name
              <input
                id={`companyName-${index}`}
                name="companyName"
                value={info.companyName}
                onChange={handleChange}
              />
            </label>
            <label>
              Position Title
              <input
                id={`positionTitle-${index}`}
                name="positionTitle"
                value={info.positionTitle}
                onChange={handleChange}
              />
            </label>
            <label>
              Start Date
              <input
                id={`startDate-${index}`}
                name="startDate"
                value={info.startDate}
                onChange={handleChange}
              />
            </label>
            <label>
              End Date
              <input
                id={`endDate-${index}`}
                name="endDate"
                value={info.endDate}
                onChange={handleChange}
              />
            </label>
            <label>
              Description
              <textarea
                id={`description-${index}`}
                name="description"
                value={info.description}
                onChange={handleChange}
              ></textarea>
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
