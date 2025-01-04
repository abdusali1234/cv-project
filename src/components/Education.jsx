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
            <label htmlFor={`schoolName-${index}`}>Institution name</label>
            <input
              id={`schoolName-${index}`}
              name="schoolName"
              value={info.schoolName}
              onChange={handleChange}
            />
            <label htmlFor={`studyTitle-${index}`}>Title of study</label>
            <input
              id={`studyTitle-${index}`}
              name="studyTitle"
              value={info.schoolTitle}
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
      </div>
    </>
  );
}
