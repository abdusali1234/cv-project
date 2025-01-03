import { FaUniversity } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export default function EducationInput({
  info,
  index,
  handleChange,
  handleDelete,
}) {
  return (
    <>
      <div id="education">
        <h1>
          <FaUniversity /> Education {index + 1}
          <FaTrashAlt onClick={handleDelete} />
        </h1>
        <div>
          <form>
            <label>
              Institution name
              <input
                id={`schoolName-${index}`}
                name="schoolName"
                value={info.schoolName}
                onChange={handleChange}
              />
            </label>
            <label>
              Title of study
              <input
                id={`studyTitle-${index}`}
                name="studyTitle"
                value={info.schoolTitle}
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
